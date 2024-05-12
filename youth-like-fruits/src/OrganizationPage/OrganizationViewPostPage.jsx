import React from 'react'
import ElevateAppBar from '../Components/ElevateAppBar/ElevateAppBar'
import SideBar from './SideBar';
import Footer from '../Components/Footer/Footer'

import ThemeProvider from '../material-kit/theme';
import PostView from '../material-kit/sections/post-management/view/post-view'


    
function OrganizationViewPostPage() {
  
  return (
    <div className='container'>
        <ElevateAppBar/>
        
        <div style = {{display: 'flex' , flexDirection: 'row' , minHeight: '90vh'}}>
          <SideBar/>
          <ThemeProvider>
              <PostView/>
          </ThemeProvider>
       </div>
       
       <Footer/>

    </div>
  )
}

export default OrganizationViewPostPage;
