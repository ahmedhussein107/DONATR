import { Routes , Route } from "react-router-dom"
import Home from "./HomePage/Home"
import LoginPage from "./Loginpage/LoginPage"
import RegisterPage from "./RegisterPage/Register"
import AdminPage from "./AdminPage/AdminPage"
import OrganizationReg from "./RegisterPage/OrganizationReg.jsx"
import DonorsList from "./AdminPage/DonorsList/DonorsList.jsx"
import AccountManagement from "./AdminPage/AccountManagement/AccountManagement.jsx"
import ContactPage from "./ContactPage/Contact.jsx"

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element ={<Home/>}/>
        <Route path='/login' element ={<LoginPage/>}/>
        <Route path='/register' element = {<RegisterPage/>}/>
        <Route path='/admin' element = {<AdminPage/>}/>
        <Route path='/contact' element ={<ContactPage/>}/>
        <Route path='/register/Organization' element={<OrganizationReg/>}/>
        <Route path='admin/donors-list' element={<DonorsList/>}/>
        <Route path='admin/account-management' element={<AccountManagement/>}/>
      </Routes>
    </>
  )
}

export default App
