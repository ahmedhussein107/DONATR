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

function OrganizationPage() {

    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => setIsOpen(!isOpen);

    const [menu, setMenu] = useState(false);

    const toggleMenu = () => setMenu(!menu);

    const closeMenu = () => setMenu(false);


    // My states
    const [selectedOption, setSelectedOption] = useState(' ');
    const [showAlert, setShowAlert] = useState(false);

    const listOfIcons = [
        <Stack direction="row" alignItems="center" spacing={1}>
            <NotificationsPopover />
            <AccountPopover />
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

            {/* Header */}
            <ElevateAppBar iconsList={listOfIcons} />


            {/* Body */}
            <div className='body' onClick={closeMenu} style={{}}>

                <SideBar menuItem={menuItem} sx />

                <div style={{ display: 'flex', flexDirection: 'column', padding: '2% 4%', width: '100%', minHeight: '90%' }}>
                    <p style={{
                        fontSize: '44px',
                        fontFamily: 'Josefin Sans',
                        fontWeight: '400',
                        color: '#292F33',
                    }}>Create Donation Post</p>

                    <div className='overlay'>
                        <div className="dropdown-container">
                            <SelectPostType selectedOption={selectedOption} onOptionSelection={handleOptionSelection} />
                        </div>

                        {
                            (selectedOption === 'clothes') ?
                                <ClothesForm />
                                : (selectedOption === 'food') ?
                                    <FoodForm />
                                    : (selectedOption === 'medicalSupplies') ?
                                        <MedicalSuppliesForm />
                                        : (selectedOption === 'bloodDonations') ?
                                            <BloodDonationsForm />
                                            : (selectedOption === 'schoolSupplies') ?
                                                <SchoolSuppliesForm />
                                                : (selectedOption === 'toys') ?
                                                    <ToyesForm onSubmit={handleFormSubmit} />
                                                    : <></>

                        }

                    </div>
                    {showAlert && (
                        <Alert severity="success" onClose={() => setShowAlert(false)}>
                            Post created Successfully. You can create another or go to other section
                        </Alert>)}
                </div>

            </div>


            {/* Footer */}
            <Footer />
        </div>
    )
}

export default OrganizationPage
