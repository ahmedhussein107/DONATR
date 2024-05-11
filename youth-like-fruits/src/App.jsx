import { Routes, Route } from "react-router-dom"
import Home from "./HomePage/Home"
import LoginPage from "./Loginpage/LoginPage"
import RegisterPage from "./RegisterPage/Register"
import AdminPage from "./AdminPage/AdminPage"
import OrganizationReg from "./RegisterPage/OrganizationReg.jsx"
import NewDonorsList from "./AdminPage/DonorsList/NewDonorsList.jsx"
import AccountManagement from "./AdminPage/AccountManagement/AccountManagement.jsx"
import ContactPage from "./ContactPage/Contact.jsx"
import DonorReg from "./RegisterPage/DonorReg.jsx"
import FormPage from "./ContactUs/FormPage.jsx"
import SuccessPage from "./ContactUs/SuccessPage.jsx"
import DashBoard from "./DonorPage/DashBoard.jsx"
import probono from "./DonorPage/probono.jsx"
import org from './DonorPage/Organizations.jsx'
import requested from './DonorPage/requestedItems/main.jsx'
import dash from './DonorPage/DashBoard.jsx'
import BasicAlerts from "./myalert.jsx"
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/admin' element={<AdminPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/register/organization' element={<OrganizationReg />} />
        <Route path='/register/donor' element={<DonorReg />} />
        <Route path='/admin/donors-list' element={<NewDonorsList />} />
        <Route path='/admin/account-management' element={<AccountManagement />} />
        <Route path='/success' element={<SuccessPage />} />
        <Route path='/form_page' element={<FormPage />} />
        <Route path='/donor/donor-home' element={<DashBoard />} />
        <Route path='/Donorbropono' element={<probono />} />
        <Route path='/Donororg' element={<org />} />
        <Route path='/Donorrequested' element={<requested />} />
        <Route path='/donordash' element={<dash />} />
      </Routes>
    </>
  )
}

export default App
