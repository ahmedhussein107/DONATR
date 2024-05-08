import React from 'react'
import ElevateAppBar from '../../Components/ElevateAppBar/ElevateAppBar'
import SideBar from '../SideBar'
import Footer from '../../Components/Footer/Footer'


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
