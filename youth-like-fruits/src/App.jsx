import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header.jsx'
import Login from './Login.jsx'
import NavigationBar from './Components/NavigationBar/NavigationBar.jsx'

function App() {
  // const [count, setCount] = useState(0)
  const itemsList = ["Home" , "About" , "News" , "Contact"];
  const buttonsList = ["login" , "register"]
  const iconsList = [reactLogo]
  return (
    <div className='container'>
      <NavigationBar title = "DONATR" list = {itemsList} buttons = {buttonsList} />
    </div>
  )
}

export default App
