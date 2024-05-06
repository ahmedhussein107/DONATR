import React , {useState} from 'react'
import ElevateAppBar from '../Components/ElevateAppBar/ElevateAppBar'
import SideBar from './SideBar'
import Footer from '../Components/Footer/Footer'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Popup from './Popup';
import Menu from '@mui/icons-material/Menu';
import { MenuItem } from '@mui/material';
import PieActiveArc from './Dashboard/PieActiveArc'
import StackBars from './Dashboard/StackBars'

function AdminPage() {

  const [isOpen , setIsOpen] = useState(false);

  const togglePopup = () => setIsOpen(!isOpen);

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
        {isOpen && <Popup onClose={togglePopup}/>}
        <SideBar/>
       <div style = {{display : 'flex' , flexDirection : 'column',marginTop :'2%'}}>
          <p style={{
          fontSize: '44px',
          fontFamily: 'Josefin Sans',
          fontWeight: '400',
          color: '#292F33',
          marginLeft: '5%',
        }}>Overview</p>
          <div  style={{display : 'flex' , flexDirection : 'row',marginTop :'2%', position: 'relative'}}>
          <div style={{minWidth: '35%', backgroundColor: '#ffffff',  marginLeft: '1%', alignContent: 'center', borderRadius: '5px'}}>
          <PieActiveArc/>
          </div>  
          <div style={{padding: '1%', backgroundColor: '#ffffff',  marginLeft: '1%',borderRadius: '5px'}}>
          <StackBars/>
          </div>
          </div>
       </div>
       </div>
        <Footer/>
    </div>
  )
}

export default AdminPage