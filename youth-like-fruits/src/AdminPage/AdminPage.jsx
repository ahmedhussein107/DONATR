import React , {useState} from 'react'
import ElevateAppBar from '../Components/ElevateAppBar/ElevateAppBar'
import SideBar from './SideBar'
import Footer from '../Components/Footer/Footer'
import PieActiveArc from './Dashboard/PieClickNoSnap'
import StackBars from './Dashboard/StackBars'
import SelectVariants from './Dashboard/SelectVariants'
import OutlinedCard from './Dashboard/OutlinedCard'
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Popup from './Popup'
import MyButton from '../Components/MyButton/MyButton'
import { Box } from '@mui/material'


function AdminPage() {

  const [isOpen , setIsOpen] = useState(false);

  const togglePopup = () => setIsOpen(!isOpen);

  const [menu , setMenu] = useState(false);

  const toggleMenu = () => setMenu(!menu);

  const closeMenu = () => setMenu(false);

  const listOfIcons = [
    <div onClick={togglePopup}>
        <NotificationsIcon style={{cursor: 'pointer' , fontSize: '2vw'}}/>
    </div>,
    <div onClick={toggleMenu}>
        <AccountCircleIcon style={{cursor: 'pointer' , fontSize: '2vw'}}/>
    </div>
  ]

  return (
    <div className='container'  >
        <ElevateAppBar iconsList={listOfIcons}/>
        <div style=
                    {{
                      position: 'absolute' , 
                      right: '0.4%',
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
                <Box sx={{'&:hover': {backgroundColor: '#2F3F4F'}, width: '100%', height: '100%', cursor: 'pointer', padding: '15px 30px'}} onClick={() => {
                  window.location.href = '/settings'
                }}>
                  <p>My Profile</p>
                </Box>
                <Box sx={{'&:hover': {backgroundColor: '#2F3F4F'},width:'100%' , cursor: 'pointer', padding: '15px 30px'}} onClick={() => {
                  window.location.href = '/login'
                }}>
                  <p>Log Out</p>
                </Box>
                {/* <MyButton directory= '/settings' label='My Profile' hoverColor='light grey' normalColor='#292F33'/> */}
              </div>
            )}
        </div>
          <div onClick={closeMenu}>
          <div style = {{display: 'flex' , flexDirection: 'row'}}>
          {isOpen && <Popup onClose={togglePopup}/>}
          <SideBar/>
          <div style={{display: 'flex', flexDirection: 'column', padding: '2% 4%'}}>
                <p style={{
                    fontSize: '44px',
                    fontFamily: 'Josefin Sans',
                    fontWeight: '400',
                    color: '#292F33',
                }}>Overview</p>
                <SelectVariants/>
                <div style={{display : 'flex' , flexDirection:'row',gap:'7.27%' ,marginTop : '1.5%'}}>
                <OutlinedCard/>
                <OutlinedCard/>
                <OutlinedCard/>
                <OutlinedCard/>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', gap: '2%', marginTop: '2%', position: 'relative', maxWidth: '88%'}}>
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
                            
                        }}>Pie Chart</p>
                        <PieActiveArc/>
                    </div>
                    <div style={{
                        minWidth: '65%',
                        // width: '70%',
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
                        }}>Stack Bars</p>
                        <StackBars/>
                    </div>
                </div>
            </div>
          </div>
          <Footer/>
        </div>
    </div>
  )
}

export default AdminPage
