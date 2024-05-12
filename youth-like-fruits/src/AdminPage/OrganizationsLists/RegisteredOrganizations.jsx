import React from 'react'
import Footer from '../../Components/Footer/Footer'
import SideBar from '../SideBar'
import ElevateAppBar from '../../Components/ElevateAppBar/ElevateAppBar'
import NotificationsPopover from '../Dashboard/Notifications'
import AccountPopover from '../Dashboard/profile'
import Stack from '@mui/material/Stack';
import RegisteredView from '../../material-kit/sections/organization/view/registered-view'

function RegisteredOrganizations() {

  const listOfIcons = [
    <Stack direction="row" alignItems="center" spacing={1}>
      <NotificationsPopover />
      <AccountPopover />
    </Stack>
  ]

  return (
    <div className='container'>
      <ElevateAppBar iconsList={listOfIcons} />
      <div style={{ display: 'flex', flexDirection: 'row', minHeight: '90vh' }}>
        <SideBar />
        <RegisteredView title="Organization Submissions" search={true} filter={false} sort={true} />
      </div>
      <Footer />
    </div>
  )
}

export default RegisteredOrganizations;
