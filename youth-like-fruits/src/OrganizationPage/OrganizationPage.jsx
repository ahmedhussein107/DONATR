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
import SelectVariants from '../AdminPage/Dashboard/SelectVariants'
import OutlinedCard from '../AdminPage/Dashboard/OutlinedCard'
import StackBars from '../AdminPage/Dashboard/StackBars'

function OrganizationPage() {

    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => setIsOpen(!isOpen);

    const [menu, setMenu] = useState(false);

    const toggleMenu = () => setMenu(!menu);

    const closeMenu = () => setMenu(false);

    const listOfIcons = [
        <Stack direction="row" alignItems="center" spacing={1}>
            <NotificationsPopover />
            <AccountPopover dir={'/OrganizationPage'} dir2={'/Settings7'} />
        </Stack>
    ]

    const fontSize = '3vh';
    const menuItem = [
        {

            path: "/organization",
            name: "Main",
            icon: <HomeIcon style={{ fontSize: fontSize, fill: '#D5E0E6' }} />
        },
        {
            path: "/organization/create-post",
            name: "Create donation posts",
            icon: <ListIcon style={{ fontSize: fontSize, fill: '#D5E0E6' }} />
        },
        {
            path: "/admin/organizations-list",
            name: "Organizations List",
            icon: <ListIcon style={{ fontSize: fontSize, fill: '#D5E0E6' }} />
        },
        {
            path: "/admin/account-management",
            name: "Account Management",
            icon: <PersonRemoveIcon style={{ fontSize: fontSize, fill: '#D5E0E6' }} />
        },
        {
            path: "/admin/registered-organizations",
            name: "Registered Organizations",
            icon: <ChecklistRoundedIcon style={{ fontSize: fontSize, fill: '#D5E0E6' }} />
        }
    ]

    return (

        <div className='container'  >
            <ElevateAppBar iconsList={listOfIcons} />



            <div onClick={closeMenu}>
                <div style={{ display: 'flex', flexDirection: 'row' }}>

                    <SideBar menuItem={menuItem} />
                    <div style={{ display: 'flex', flexDirection: 'column', padding: '2% 4%', width: '100%' }}>
                        <p className='title' style={{
                            fontSize: '44px',
                            fontFamily: 'Josefin Sans',
                            fontWeight: '400',
                            color: '#292F33',
                        }}>Create Donation Post</p>




                        <div style={{
                            width: '100%',
                            backgroundColor: '#D5E0E6',
                            borderRadius: '5px',
                            boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.3)',
                            padding: '20px'
                        }}>
                            <p style={{
                                fontSize: '24px',
                                fontFamily: 'Josefin Sans',
                                fontWeight: 'bold',
                                color: '#000000',
                                marginBottom: '10px'
                            }}>Select</p>

                        </div>

                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default OrganizationPage
