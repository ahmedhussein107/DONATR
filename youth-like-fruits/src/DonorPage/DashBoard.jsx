import React , {useState} from 'react'
import ElevateAppBar from '../Components/ElevateAppBar/ElevateAppBar'
import SideBar from '../AdminPage/SideBar'
import Footer from '../Components/Footer/Footer'
import NotificationsPopover from '../AdminPage/Dashboard/Notifications'
import AccountPopover from '../AdminPage/Dashboard/profile'
import Stack from '@mui/material/Stack';
import ProfilePage from './profile';
import HomeIcon from '@mui/icons-material/Home';
import ListIcon from '@mui/icons-material/List';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import ChecklistRoundedIcon from '@mui/icons-material/ChecklistRounded';
function DashBoard() {

  const [menu , setMenu] = useState(false);
  const closeMenu = () => setMenu(false);

  const listOfIcons = [
    <Stack direction="row" alignItems="center" spacing={1}>
    <NotificationsPopover />
    <AccountPopover />
  </Stack>
  ]

  const fontSize = '3vh';
  const menuItem=[
    {
        path:"/admin",
        name:"Dashboard",
        icon:<HomeIcon style={{fontSize : fontSize ,fill: '#D5E0E6'}}/>
    },
    {
        path:"/admin/donors-list",
        name:"Donors List",
        icon:<ListIcon style={{fontSize : fontSize,fill: '#D5E0E6'}}/>
    },
    {
        path:"/admin/organizations-list",
        name:"Organizations List",
        icon:<ListIcon style={{fontSize : fontSize,fill: '#D5E0E6'}}/>
    },
    {
        path:"/admin/account-management",
        name:"Account Management",
        icon:<PersonRemoveIcon style={{fontSize : fontSize,fill: '#D5E0E6'}}/>
    },
    {
        path:"/admin/registered-organizations",
        name:"Registered Organizations",
        icon:<ChecklistRoundedIcon style={{fontSize : fontSize,fill: '#D5E0E6'}}/>
    }
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
        
          <SideBar menuItem={menuItem}/>
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
