import React from 'react'
import Footer from '../../Components/Footer/Footer'
import SideBar from '../SideBar'
import ElevateAppBar from '../../Components/ElevateAppBar/ElevateAppBar'
import { ProductsView } from '../.././material-kit/sections/products/view';
import NotificationsPopover from '.././Dashboard/Notifications'
import AccountPopover from '.././Dashboard/profile'
import Stack from '@mui/material/Stack';

function DonorsList() {

  const listOfIcons = [
    <Stack direction="row" alignItems="center" spacing={1}>
    <NotificationsPopover />
    <AccountPopover />
  </Stack>
  ]

  return (
    <div className='container'>
      <ElevateAppBar iconsList={listOfIcons}/>
      <div style = {{display: 'flex' , flexDirection: 'row' , minHeight: '90vh'}}>
        <SideBar/>
        <ProductsView title="Donors Submissions" search={true} filter={false} sort={true}/>
      </div>
      <Footer/>

    </div>
  )
}

export default DonorsList
