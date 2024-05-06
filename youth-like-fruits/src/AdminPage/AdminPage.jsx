import React from 'react'
import ElevateAppBar from '../Components/ElevateAppBar/ElevateAppBar'
import SideBar from './SideBar'
import Footer from '../Components/Footer/Footer'
import PieActiveArc from './Dashboard/PieActiveArc'
import StackBars from './Dashboard/StackBars'

function AdminPage() {
  
  return (
    <div className='container'>
        <ElevateAppBar/>
        <div style={{display : 'flex' , msFlexDirection : 'row'}}>
        <div style = {{display: 'flex' , flexDirection: 'row'}}>
          <SideBar/>
        </div>
       <div  style={{display : 'flex' , flexDirection : 'row',marginTop :'15%'}}>
       <PieActiveArc/>
       <StackBars/>
       </div>
       </div>
        <Footer/>

    </div>
  )
}

export default AdminPage