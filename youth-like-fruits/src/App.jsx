import { Routes , Route } from "react-router-dom"
import Home from "./HomePage/Home"
import LoginPage from "./Loginpage/LoginPage"
import RegisterPage from "./RegisterPage/Register"
import AdminPage from "./AdminPage/AdminPage"

import ElevateAppBar from "./Components/ElevateAppBar/ElevateAppBar.jsx"
import Footer from "./Components/Footer/Footer"
import LeftSide from "./RegisterPage/Layouts/LeftSide.jsx"
import OrganizationReg from "./RegisterPage/OrganizationReg.jsx"


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element ={<Home/>}/>
        <Route path='/login' element ={<LoginPage/>}/>
        <Route path='/register' element = {<RegisterPage/>}/>
        <Route path='/admin' element = {<AdminPage/>}/>
        <Route path='/register/Organization' element={<OrganizationReg/>}></Route>
        {/* <Route path='/register/Donor' element={<Org/>}></Route> */}
      </Routes>
    </>
  )
}

export default App
