import React from 'react'
import Footer from '../../Components/Footer/Footer'
import SideBar from '../SideBar'
import ElevateAppBar from '../../Components/ElevateAppBar/ElevateAppBar'
import RequestCard from './RequestCard'


function DonorsList() {
  
  return (
    <div className='container'>
        <ElevateAppBar/>
        <div style = {{display: 'flex' , flexDirection: 'row'}}>
          <SideBar/>
          <div style={{display : 'flex', flexDirection : 'column',marginTop :'1%', marginLeft :'1%'}}>
            <RequestCard/>
          </div>
       </div>
       
       <Footer/>

    </div>
  )
}

export default DonorsList
