import React , {useState} from 'react'
import ElevateAppBar from '../Components/ElevateAppBar/ElevateAppBar'
import SideBar from './SideBar'
import Footer from '../Components/Footer/Footer'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Popup from './Popup';
import Menu from '@mui/icons-material/Menu';
import { MenuItem } from '@mui/material';

function AdminPage() {

  const listOfIcons = [
    <div onClick={togglePopup}>
      <NotificationsNoneIcon style={{cursor: 'pointer' , fontSize: '2vw'}}/>
    </div>,
    <div onClick={() => {}}>
        <AccountCircleIcon style={{cursor: 'pointer' , fontSize: '2vw'}}/>
    </div>
  ]

  return (
    <div className='container'>
        <ElevateAppBar iconsList={listOfIcons}/>
        <div style = {{display: 'flex' , flexDirection: 'row'}}>
          <SideBar/>
        </div>
        <Footer/>
    </div>
  )
}

export default AdminPage