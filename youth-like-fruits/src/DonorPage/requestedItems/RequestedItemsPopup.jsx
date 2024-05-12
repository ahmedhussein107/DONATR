import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import ClothesInfo from './ClothesInfo';
import MyButton from '../../Components/MyButton/MyButton';
import SchoolInfo from './SchoolInfo';
import bookIcon from '../../assets/serwayIcon.jpg';
import img from '../../assets/icons/avatar_12.jpg';
import ToysInfo from './ToysInfo';
import FoodInfo from './FoodInfo';
import MedicalInfo from './MedicalInfo';
import BloodInfo from './BloodInfo';


function RequestedItemsPopup(props) {
  const onClose = props.onClose;
  const info = props.info;
  const fulfil = props.fulfil;
  const onClickFulfil = props.onClickFulfil;
  const type = props.type;
  const fulfilButton = <MyButton label={'Fulfil'} directory={'/DonationPickupForm'} />

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <div style={{ display: 'flex', flexDirection: 'row-reverse' }}>
          <IconButton onClick={onClose}>
            <CloseIcon style={{ color: 'red', height: '5vh', width: '5vh' }} />
          </IconButton>
        </div>

        {type === 'Clothes' && <ClothesInfo
          age={info.age}
          gender={info.gender}
          season={info.season}
          material={info.material}
          quantity={info.quantity}
          itemName={info.itemName}
          image={info.image}
          fulfilButton={fulfilButton}
        />}
        {type === 'School Supplies' && <SchoolInfo
          type={info.type}
          subtype={info.subtype}
          bookName={info.bookName}
          author={info.author}
          language={info.language}
          edition={info.edition}
          shortSummary={info.shortSummary}
          image={info.type === 'Book' ? bookIcon : img}
          quantity={info.quantity}
          date={info.date}
          handleButtonClick={info.handleButtonClick}
          fulfilButton={fulfilButton}
        />}


        {type === 'Toys' && <ToysInfo
          type={info.type}
          subtype={info.subtype}
          age={info.age}
          gender={info.gender}
          quantity={info.quantity}
          date={info.date}
          handleButtonClick={info.handleButtonClick}
          fulfilButton={<MyButton />}
        />}
        {type === 'Food' && <FoodInfo
          subtype={info.subtype}
          itemName={info.itemName}
          quantity={info.quantity}
        />
        }
        {type === 'Medical Suplies' && <MedicalInfo
            subtype={info.type}
            medicalUse ={info.medicalUse}
            deviceType={info.deviceType}
            use={info.use}
            quantity={info.quantity}
            date={info.date}
            handleButtonClick={info.handleButtonClick}
            fulfilButton={<MyButton/>}

        />}
        {type === 'Blood Donations' && <BloodInfo
            hospitalName = {info.hospitalName}
            governorate = {info.governorate}
            area = {info.area}
            hospitalAddress = { info.hospitalAddress }
            patientName = {info.patientName}
            bloodType = {info.bloodType}
            date={info.date}
            handleButtonClick={info.handleButtonClick}
            fulfilButton={<MyButton/>}
        />}
      </div>
    </div>
  );
}

export default RequestedItemsPopup;
