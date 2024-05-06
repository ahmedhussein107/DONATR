import React from 'react'
import ElevateAppBar from '../Components/ElevateAppBar/ElevateAppBar'
import MiniDrawer from './MiniDrawer'
import SideBar from './SideBar'

function AdminPage() {
  return (
    <div className='container'>
        <ElevateAppBar/>
        <div style = {{display: 'flex' , flexDirection: 'row' , alignItems: 'center' , marginTop: '5%'}}>
          <SideBar/>
        </div>
    </div>
  )
}

export default AdminPage