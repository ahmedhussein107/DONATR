/* eslint-disable no-unused-vars */

/* eslint-disable react/jsx-key */
import React, { useState } from 'react'
import ElevateAppBar from '../Components/ElevateAppBar/ElevateAppBar'
import SideBar from './SideBar'
import Footer from '../Components/Footer/Footer'


import NotificationsPopover from '../AdminPage/Dashboard/Notifications'
import AccountPopover from '../AdminPage/Dashboard/profile'
import Stack from '@mui/material/Stack';
import HomeIcon from '@mui/icons-material/Home';
import ListIcon from '@mui/icons-material/List';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import ChecklistRoundedIcon from '@mui/icons-material/ChecklistRounded';


import './OrganizationCreatePostPage.css'
// import { ClothesForm, FoodForm, MedicalSuppliesForm, BloodDonationsForm, SchoolSuppliesForm, ToyesForm} from './Components/Forms'
import ClothesForm from './Components/Forms/ClothesForm'
import FoodForm from './Components/Forms/FoodForm'
import MedicalSuppliesForm from './Components/Forms/MedicalSuppliesForm'
import BloodDonationsForm from './Components/Forms/BloodDonationsForm'
import SchoolSuppliesForm from './Components/Forms/SchoolSuppliesForm'
import ToyesForm from './Components/Forms/ToyesForm'
import SelectPostType from './Components/SelectPostType'
import { Alert } from '@mui/material';
import ProfilePage from '../DonorPage/profile'
import Profile from './Profile'

function OrganizationPage() {





    // My states
    const [selectedOption, setSelectedOption] = useState(' ');
    const [showAlert, setShowAlert] = useState(false);

    const listOfIcons = [

        <Stack direction="row" alignItems="center" spacing={1}>
            <NotificationsPopover />
            <AccountPopover dir={'/organization'} dir2={'/Settings'}/>
        </Stack>
    ]

    const handleFormSubmit = () => {
        setShowAlert(true);
        setSelectedOption(' ');
    }

    const handleOptionSelection = (x) => {
        setSelectedOption(x);
        setShowAlert(false);
    }

    const fontSize = '3vh';
    const menuItem = [
        {

            path: "/organization",
            name: "Dashboard",
            icon: <HomeIcon style={{ fontSize: fontSize, fill: '#D5E0E6' }} />
        },
        {
            path: "/organization/create-post",
            name: "Create donation posts",
            icon: <ListIcon style={{ fontSize: fontSize, fill: '#D5E0E6' }} />
        },
        {
            path: "/organization/view-posts",
            name: "View donation posts",
            icon: <ListIcon style={{ fontSize: fontSize, fill: '#D5E0E6' }} />
        },

    ]

    return (

        <div className='container'  >

            {/* Header */}
            <ElevateAppBar iconsList={listOfIcons} />


            {/* Body */}
            <div className='body' style={{}}>

                <SideBar menuItem={menuItem} sx />


                <div style={{ display: 'flex', flexDirection: 'column', padding: '2% 4%', width: '100%', minHeight: '90%' }}>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <p style={pageTitleStyle}>DashBoard</p>
                    </div>


                    <Profile />
                </div>

            </div>


            {/* Footer */}
            <Footer />
        </div>
    )
}

export default OrganizationPage


const pageTitleStyle = {
    fontSize: '44px',
    fontFamily: 'Josefin Sans',
    fontWeight: '400',
    color: '#292F33',
}
