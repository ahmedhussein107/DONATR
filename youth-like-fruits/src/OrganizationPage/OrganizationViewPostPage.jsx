import React from 'react'
import ElevateAppBar from '../Components/ElevateAppBar/ElevateAppBar'
import SideBar from './SideBar';
import Footer from '../Components/Footer/Footer'
import { useState } from 'react'
import ThemeProvider from '../material-kit/theme';
import PostView from '../material-kit/sections/post-management/view/post-view'
import Popup from '../AdminPage/DonorsList/PopUp';
import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

function OrganizationViewPostPage() {

  const [currentInfo, setCurrentInfo] = useState(null);
  const [openPopup, setOpenPopup] = useState(false);


  const onPopupOpen = () => {
    setOpenPopup(true);
  }
  const onPopupClose = () => {
    setOpenPopup(false);
  }

  const handleDonorClick = (name) => {
    setCurrentInfo(
      {
        name: name,
        id: faker.string.uuid(),
        email: faker.internet.email(name),
        day: faker.number.int({min: 1 , max: 30}),
        month: faker.number.int({min: 1 , max: 12}),
        year: faker.number.int({min: 2018 , max: 2023}),
        image:  `/assets/avatars/avatar_${faker.number.int({min: 1 , max: 23})}.jpg`,
        birthdate: faker.date.birthdate(),
        contact: faker.phone.number(),
        type: sample([
            'Teacher',
            'Doctor',
        ]),
      });
    onPopupOpen();
  }

  return (
    <div className='container'>
      <ElevateAppBar />

      <div style={{ display: 'flex', flexDirection: 'row', minHeight: '90vh' }}>
        <SideBar />
        <ThemeProvider>
          {openPopup && <Popup
            onClose={onPopupClose}
            info={currentInfo}
            save={false}
            accept={false}
            reject={false}
            download={false}
            header='Donor Information'
          />}
          <PostView handleDonorClick={handleDonorClick} />
        </ThemeProvider>
      </div>

      <Footer />

    </div>
  )
}

export default OrganizationViewPostPage;
