import React from 'react'
import ElevateAppBar from '../Components/ElevateAppBar/ElevateAppBar'
import App from './EventLayout'
import Footer from '../Components/Footer/Footer'

function EventPage() {


    return (
    <div className='container'>
      <ElevateAppBar/>
      <App/>
      <Footer/>
    </div>
    )
  }

export default EventPage
