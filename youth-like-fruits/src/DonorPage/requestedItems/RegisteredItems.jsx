import React from 'react'
import Footer from '../../Components/Footer/Footer';
import SideBar from '../../AdminPage/SideBar';
import ElevateAppBar from '../../Components/ElevateAppBar/ElevateAppBar';
import { ProductsView } from '../../material-kit/sections/products/view';
import NotificationsPopover from '../../AdminPage/Dashboard/Notifications';
import AccountPopover from '../../AdminPage/Dashboard/profile';
import Stack from '@mui/material/Stack';
import HomeIcon from '@mui/icons-material/Home';
import ListIcon from '@mui/icons-material/List';
import HailIcon from '@mui/icons-material/Hail';
import RegisteredItemsView from '../../material-kit/sections/products/view/requested-items-view'

function RegisteredItems() {

  const listOfIcons = [
    <Stack direction="row" alignItems="center" spacing={1}>
      <NotificationsPopover />
      <AccountPopover dir={'/donor/donor-home'} dir2={'/Settings2'} />
    </Stack>
  ]
  const fontSize = '3vh';


  const menuItem = [
    {
      path: '/donor/donor-home',
      name: "Profile",
      icon: <HomeIcon style={{ fontSize: fontSize, fill: '#D5E0E6' }} />
    },
    {
      path: '/RegisteredItems',
      name: "Requested Items",
      icon: <ListIcon style={{ fontSize: fontSize, fill: '#D5E0E6' }} />
    },
    {
      path: '/Donororg',
      name: "Organizations List",
      icon: <ListIcon style={{ fontSize: fontSize, fill: '#D5E0E6' }} />
    },
    {
      path: '/Donorbropono',
      name: "Probono services",
      icon: <HailIcon style={{ fontSize: fontSize, fill: '#D5E0E6' }} />
    },
  ]
  return (
    <div className='container'>
      <ElevateAppBar iconsList={listOfIcons} />
      <div style={{ display: 'flex', flexDirection: 'row', minHeight: '90vh' }}>
        <SideBar menuItem={menuItem} />
        <RegisteredItemsView title="Requested Items" search={true} filter={true} sort={true} />
      </div>
      <Footer />

    </div>
  )
}

export default RegisteredItems
