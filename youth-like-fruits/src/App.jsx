import { useState } from 'react'
import reactLogo from './assets/react.svg'
import homePic from './assets/HomePagePic.jpeg'
import './App.css'
import ElevateAppBar from './Components/ElevateAppBar/ElevateAppBar.jsx'
import Footer from './Components/Footer/Footer.jsx'
import SideParagraph from './Components/SideParagraph/SideParagraph.jsx'
import TextLayout from './Components/Layout/Layout.jsx'
import TriggersTooltips from './Components/TriggersToolTips/TriggersToolTips.jsx'
import DonationList from './Components/DonationList/DonationList.jsx'

function App() {
  // const [count, setCount] = useState(0)
  const donationCardList = [
      {icon: reactLogo , title: "React" , description: "This is React!"}, 
      {icon: reactLogo , title: "React" , description: "This is React!"},
      {icon: reactLogo , title: "React" , description: "This is Not React!"},
      {icon: reactLogo , title: "React" , description: "This is React!"}
    ]
  return (
    <div className='container'>
      <ElevateAppBar></ElevateAppBar>
      <div className='imageAndText'>
          <img className='homeImage' src = {homePic} alt="home image"></img>
          <TextLayout></TextLayout>
      </div>
      <DonationList list = {donationCardList}/>
      <Footer></Footer>
    </div>
  )
}

export default App
