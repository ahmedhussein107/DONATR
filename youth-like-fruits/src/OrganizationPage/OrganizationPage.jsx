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
import Profile from './Profile.jsx'

function OrganizationPage() {
    const [selectedOption, setSelectedOption] = useState(' ');
    const [showAlert, setShowAlert] = useState(false);

    const listOfIcons = [

        <Stack direction="row" alignItems="center" spacing={1}>
            <NotificationsPopover />
            <AccountPopover dir={'/OrganizationPage'} dir2={'/Settings7'} />
        </Stack>
    ]


    const fontSize = '3vh';

    return (

        <div className='container'  >

            {/* Header */}
            <ElevateAppBar iconsList={listOfIcons} />


            {/* Body */}
            <div className='body' style={{}}>

                <SideBar />
                <div style={{ display: 'flex', flexDirection: 'column', padding: '2% 4%', width: '100%' }}>
                    <p className='title' style={{
                        fontSize: '44px',
                        fontFamily: 'Josefin Sans',
                        fontWeight: '400',
                        color: '#292F33',
                    }}>Create Donation Post</p>

                    <Profile />




                </div>



            </div>
            <Footer />
        </div>
    )
}

export default OrganizationPage

