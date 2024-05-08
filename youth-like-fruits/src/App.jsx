import { Routes , Route } from "react-router-dom"
import Home from "./HomePage/Home"
import LoginPage from "./Loginpage/LoginPage"
import RegisterPage from "./RegisterPage/Register"
import AdminPage from "./AdminPage/AdminPage"

import OrganizationReg from "./RegisterPage/OrganizationReg.jsx"
import DonorsList from "./AdminPage/DonorsList/DonorsList.jsx"
import DonorReg from "./RegisterPage/DonorReg.jsx"


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element ={<Home/>}/>
        <Route path='/login' element ={<LoginPage/>}/>
        <Route path='/register' element = {<RegisterPage/>}/>
        <Route path='/admin' element = {<AdminPage/>}/>
        <Route path='/register/organization' element={<OrganizationReg/>}/>
        <Route path='/register/donor' element={<DonorReg/>}/>
        <Route path='admin/donors-list' element={<DonorsList/>}/>
      </Routes>
    </>
  )
}

export default App
