import React, { useState } from 'react'
import ElevateAppBar from '../Components/ElevateAppBar/ElevateAppBar'
import SideBar from './SideBar'
import Footer from '../Components/Footer/Footer'
import PieActiveArc from './Dashboard/PieClickNoSnap'
import StackBars from './Dashboard/StackBars'
import SelectVariants from './Dashboard/SelectVariants'
import OutlinedCard from './Dashboard/OutlinedCard'
import NotificationsPopover from './Dashboard/Notifications'
import AccountPopover from './Dashboard/profile'
import Stack from '@mui/material/Stack';
import HomeIcon from '@mui/icons-material/Home';
import ListIcon from '@mui/icons-material/List';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import ChecklistRoundedIcon from '@mui/icons-material/ChecklistRounded';
function AdminPage() {

  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => setIsOpen(!isOpen);

  const [menu, setMenu] = useState(false);

  const toggleMenu = () => setMenu(!menu);

  const closeMenu = () => setMenu(false);

  const listOfIcons = [
    <Stack direction="row" alignItems="center" spacing={1}>
      <NotificationsPopover />
      <AccountPopover dir={'/admin'} dir2={'/Settings'} />
    </Stack>
  ]

  const fontSize = '3vh';
  const menuItem = [
    {
      path: "/admin",
      name: "Dashboard",
      icon: <HomeIcon style={{ fontSize: fontSize, fill: '#D5E0E6' }} />
    },
    {
      path: "/admin/donors-list",
      name: "Donors List",
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
    // <div><AccountPopover/>
    // <NotificationsPopover/>
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
              // gap: '1.2vh' ,
              // padding: '15px 30px'
            }}>
          </div>
        )}
      </div>
      <div onClick={closeMenu}>
        <div style={{ display: 'flex', flexDirection: 'row' }}>

          <SideBar menuItem={menuItem} />
          <div style={{ display: 'flex', flexDirection: 'column', padding: '2% 4%' }}>
            <p style={{
              fontSize: '44px',
              fontFamily: 'Josefin Sans',
              fontWeight: '400',
              color: '#292F33',
            }}>Overview</p>
            <div>
              <SelectVariants />
              <br />
              <OutlinedCard />

            </div>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '2%', marginTop: '2%', position: 'relative', maxWidth: '88%' }}>
              <div style={{
                minWidth: '50%',
                // width: '40%',
                backgroundColor: '#D5E0E6',
                alignContent: 'center',
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

                }}>Supplies</p>
                <PieActiveArc />
              </div>
              <div style={{
                minWidth: '65%',
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
                }}>Continental distribution</p>
                <StackBars />
                {/* <OutlinedCard/> */}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default AdminPage
