import React from 'react'
import ElevateAppBar from '../../Components/ElevateAppBar/ElevateAppBar'
import SideBar from '../SideBar'
import Footer from '../../Components/Footer/Footer'

import { Helmet } from 'react-helmet-async';
import ThemeProvider from '../../material-kit/theme';
import UserView from '../../material-kit/sections/user/view/user-view';



function AccountManagement() {
  
  return (
    <div className='container'>
        <ElevateAppBar/>
        <div style = {{display: 'flex' , flexDirection: 'row'}}>
          <SideBar/>
          <ThemeProvider>
              <UserView/>
          </ThemeProvider>
       </div>
       
       <Footer/>

    </div>
  )
}

export default AccountManagement
