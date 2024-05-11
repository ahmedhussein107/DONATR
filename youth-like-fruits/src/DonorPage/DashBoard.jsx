import React, { useState } from 'react'
import ElevateAppBar from '../Components/ElevateAppBar/ElevateAppBar'
import SideBar from '../AdminPage/SideBar'
import Footer from '../Components/Footer/Footer'
import NotificationsPopover from '../AdminPage/Dashboard/Notifications'
import AccountPopover from '../AdminPage/Dashboard/profile'
import Stack from '@mui/material/Stack';
import ProfilePage from './profile'
import HomeIcon from '@mui/icons-material/Home';
import ListIcon from '@mui/icons-material/List';
import HailIcon from '@mui/icons-material/Hail';
import SettingsProfile from './SettingsProfile'
function DashBoard() {

  const [menu, setMenu] = useState(false);
  const closeMenu = () => setMenu(false);

  const listOfIcons = [
    <Stack direction="row" alignItems="center" spacing={1}>
      <NotificationsPopover />
      <AccountPopover dir='/donor/donor-home' dir2={'/Settings'} />
    </Stack>
  ]
  const fontSize = '3vh';
  const menuItem = [
    {
      path: '/donor/donor-home',
      name: "Profile",
      icon: <HomeIcon style={{ fontSize: fontSize, fill: '#D5E0E6' }} />
    },
    {
      path: '/Donorrequested',
      name: "Requested Items",
      icon: <ListIcon style={{ fontSize: fontSize, fill: '#D5E0E6' }} />
    },
    {
      path: '/Donororg',
      name: "Organizations List",
      icon: <ListIcon style={{ fontSize: fontSize, fill: '#D5E0E6' }} />
    },
    {
      path: '/Donorbropono',
      name: "Probono services",
      icon: <HailIcon style={{ fontSize: fontSize, fill: '#D5E0E6' }} />
    },
  ]

  return (
    <div className='container'  >
      <ElevateAppBar iconsList={listOfIcons} />
      <div style=
        {{
          position: 'fixed',
          right: '0%',
          minHeight: '15vh',
          minWidth: '10vw'
        }}>
        {menu && (
          <div style=
            {{
              display: 'flex',
              flexDirection: 'column',
              background: '#292F33',
              alignItems: 'center',
              textAlign: 'center',
            }}>
          </div>
        )}
      </div>
      <div onClick={closeMenu}>
        <div style={{ display: 'flex', flexDirection: 'row', maxHeight: '86vh', overflowY: 'hidden' }}>

          <SideBar menuItem={menuItem} />
          <div style={{ display: 'flex', flexDirection: 'column', padding: '2% 4%' }}>
            <p style={{
              fontSize: '44px',
              fontFamily: 'Josefin Sans',
              fontWeight: '400',
              color: '#292F33',
            }}>DashBoard</p>
            <br />
            <ProfilePage header='User Profile'/>
          </div>

        </div>
        <Footer />
      </div>
    </div>
  )
}

export default DashBoard
