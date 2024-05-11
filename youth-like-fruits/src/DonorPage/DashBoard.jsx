import React , {useState} from 'react'
import ElevateAppBar from '../Components/ElevateAppBar/ElevateAppBar'
import SideBar from '../AdminPage/SideBar'
import Footer from '../Components/Footer/Footer'
import NotificationsPopover from '../AdminPage/Dashboard/Notifications'
import AccountPopover from '../AdminPage/Dashboard/profile'
import Stack from '@mui/material/Stack';
import ProfilePage from './profile'
function DashBoard() {

  const [menu , setMenu] = useState(false);
  const closeMenu = () => setMenu(false);

  const listOfIcons = [
    <Stack direction="row" alignItems="center" spacing={1}>
    <NotificationsPopover />
    <AccountPopover />
  </Stack>
  ]

  return (
    <div className='container'  >
        <ElevateAppBar iconsList={listOfIcons}/>
        <div style=
                    {{
                      position: 'fixed' , 
                      right: '0%',
                      minHeight: '15vh',
                      minWidth: '10vw'
                    }}>
          {menu && (
              <div style=
                {{
                  display: 'flex' ,
                  flexDirection: 'column' ,
                  background: '#292F33' ,
                  alignItems: 'center' ,
                  textAlign: 'center',  
                  // gap: '1.2vh' ,
                  // padding: '15px 30px'
                }}>
             </div>
            )}
        </div>
          <div onClick={closeMenu}>
          <div style = {{display: 'flex' , flexDirection: 'row'}}>
        
          <SideBar/>
          <div style={{display: 'flex', flexDirection: 'column', padding: '2% 4%'}}>
                <p style={{
                    fontSize: '44px',
                    fontFamily: 'Josefin Sans',
                    fontWeight: '400',
                    color: '#292F33',
                }}>Overview</p> 
            </div>
            <ProfilePage/>
          </div>
          <Footer/>
        </div>
    </div>
  )
}

export default DashBoard
