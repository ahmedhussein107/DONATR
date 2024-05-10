import React from 'react'
import ElevateAppBar from '../../Components/ElevateAppBar/ElevateAppBar'
import SideBar from '../SideBar'
import Footer from '../../Components/Footer/Footer'

import { Helmet } from 'react-helmet-async';
import UserPage from '../../material-kit/sections/user/view/user-view';
import ThemeProvider from '../../material-kit/theme';



function AccountManagement() {
  
  return (
    <div className='container'>
        <ElevateAppBar/>
        <div style = {{display: 'flex' , flexDirection: 'row'}}>
          <SideBar/>
          <ThemeProvider>
              <UserPage/>
          </ThemeProvider>
       </div>
       
       <Footer/>

    </div>
  )
}

export default AccountManagement
