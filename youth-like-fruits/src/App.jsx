import { Routes , Route } from "react-router-dom"
import Home from "./HomePage/Home"
import LoginPage from "./Loginpage/LoginPage"
import RegisterPage from "./RegisterPage/Register"

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element ={<Home/>}/>
        <Route path='/login' element ={<LoginPage/>}/>
        <Route path='/register' element = {<RegisterPage/>}/>
      </Routes>
    </>
  )
}

export default App
