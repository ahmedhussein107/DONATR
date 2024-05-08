import React from 'react'
import TransitionGroup from './TransitionGroupExample'
import Footer from '../Components/Footer/Footer'
import SideBar from '../AdminPage/SideBar'
import ElevateAppBar from '../Components/ElevateAppBar/ElevateAppBar'


function AccountManagement() {
  
  return (
    <div className='container'>
        <ElevateAppBar/>
        <div style = {{display: 'flex' , flexDirection: 'row'}}>
          <SideBar/>
          <div style={{display : 'flex', flexDirection : 'column',marginTop :'1%', marginLeft :'1%'}}>
            <TransitionGroup/>
          </div>
       </div>
       
       <Footer/>

    </div>
  )
}

export default AccountManagement
