import { Routes , Route } from "react-router-dom"
import Home from "./Components/HomePage/Home"
import LoginPage from "./Loginpage/LoginPage"

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element ={<Home/>}/>
        <Route path='/login' element ={<LoginPage/>}/>
      </Routes>
    </>
  )
}

export default App
