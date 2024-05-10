import React from 'react'
import Footer from '../../Components/Footer/Footer'
import SideBar from '../SideBar'
import ElevateAppBar from '../../Components/ElevateAppBar/ElevateAppBar'
import { ProductsView } from '../.././material-kit/sections/products/view';

function DonorsList() {

  return (
    <div className='container'>
      <ElevateAppBar/>
      <div style = {{display: 'flex' , flexDirection: 'row' , minHeight: '90vh'}}>
        <SideBar/>
        <ProductsView />
      </div>
      <Footer/>

    </div>
  )
}

export default DonorsList
