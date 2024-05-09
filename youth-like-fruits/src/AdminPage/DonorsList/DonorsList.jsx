import React from 'react'
import Footer from '../../Components/Footer/Footer'
import SideBar from '../SideBar'
import ElevateAppBar from '../../Components/ElevateAppBar/ElevateAppBar'
import RequestCard from './RequestCard'
import MyCarousel from './MyCarousel'
import { height } from '@mui/system'
import img from '../../assets/donor_icon.png';

function DonorsList() {
  const list = [
    {date: '20/02/2020' , name: 'ahmed' , image: {img}},
    {date: '20/02/2020' , name: 'ahmed' , image: {img}},
    {date: '20/02/2020' , name: 'ahmed' , image: {img}},
    {date: '20/02/2020' , name: 'ahmed' , image: {img}}
  ]

  return (
    <div className='container'>
      <ElevateAppBar/>
      <div style = {{display: 'flex' , flexDirection: 'row' , minHeight: '10vh'}}>
        <SideBar/>
        <MyCarousel listOfCards={list}/>
      </div>
      <Footer/>

    </div>
  )
}

export default DonorsList
