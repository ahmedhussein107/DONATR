import React from 'react'
import Footer from '../../Components/Footer/Footer'
import SideBar from '../SideBar'
import ElevateAppBar from '../../Components/ElevateAppBar/ElevateAppBar'
import RequestCard from './RequestCard'
import MyCarousel from './MyCarousel'
import { height } from '@mui/system'

function DonorsList() {
  
  return (
    <div className='container'>
      <ElevateAppBar/>
      <div style = {{display: 'flex' , flexDirection: 'row' , minHeight: '10vh'}}>
        <SideBar/>
        <MyCarousel/>
      </div>
      <Footer/>

    </div>
  )
}

export default DonorsList
