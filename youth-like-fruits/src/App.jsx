import { useState } from 'react'
import reactLogo from './assets/react.svg'
import homePic from './assets/HomePagePic.jpeg'
import './App.css'
import ElevateAppBar from './Components/ElevateAppBar/ElevateAppBar.jsx'
import Footer from './Components/Footer/Footer.jsx'
import SideParagraph from './Components/SideParagraph/SideParagraph.jsx'

function App() {
  // const [count, setCount] = useState(0)
  const itemsList = ["Home" , "About" , "News" , "Contact"];
  const buttonsList = ["login" , "register"]
  const iconsList = [reactLogo]
  return (
    <div className='container'>
      <ElevateAppBar></ElevateAppBar>
      <div className='imageAndText'>
          <img className='homeImage' src = {homePic} alt="home image"></img>
          <SideParagraph></SideParagraph>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default App
