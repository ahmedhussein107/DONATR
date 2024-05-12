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
import OrganizationPage from "./OrganizationPage/OrganizationPage.jsx"
import OrganizationCreatePostPage from "./OrganizationPage/OrganizationCreatePostPage.jsx"
import Settings from './DonorPage/Settings.jsx'
import RegisteredItems from "./DonorPage/requestedItems/RegisteredItems.jsx"
import OrganizationList from './AdminPage/OrganizationsLists/OrganizationList.jsx'
import OrganizationViewPostPage from "./OrganizationPage/OrganizationViewPostPage.jsx"
import RegisteredOrganizations from './AdminPage/OrganizationsLists/RegisteredOrganizations.jsx'
import Settings2 from "./DonorPage/Settings2.jsx"
import Settings7 from "./DonorPage/Settings7.jsx"
import EventPage from './EventPage/EventPage.jsx'
import ForgotPassword from "./ForgotPassword/ForgotPassword.jsx"
import Aboutt from "./AboutPage/About.jsx"
import DonationPickupForm from "./DonorPage/DonationPickupForm.jsx"
function App() {
  return (
    // <DonationPickupForm />
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/admin' element={<AdminPage />} />
        <Route path='/organization' element={<OrganizationPage />} />
        <Route path='/organization/create-post' element={<OrganizationCreatePostPage />} />
        <Route path='/organization/view-posts' element={<OrganizationViewPostPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/register/organization' element={<OrganizationReg />} />
        <Route path='/register/donor' element={<DonorReg />} />
        <Route path='/admin/donors-list' element={<NewDonorsList />} />
        <Route path='/admin/account-management' element={<AccountManagement />} />
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/admin' element={<AdminPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/register/organization' element={<OrganizationReg />} />
        <Route path='/register/donor' element={<DonorReg />} />
        <Route path='/admin/donors-list' element={<NewDonorsList />} />
        <Route path='/admin/account-management' element={<AccountManagement />} />
        <Route path='/admin/organizations-list' element={<OrganizationList />} />
        <Route path='/admin/registered-organizations' element={<RegisteredOrganizations />} />
        <Route path='/success' element={<SuccessPage />} />
        <Route path='/form_page' element={<FormPage />} />
        <Route path='/donor/donor-home' element={<DashBoard />} />
        <Route path='/Donorbropono' element={<probono />} />
        <Route path='/Donororg' element={<org />} />
        <Route path='/Donorrequested' element={<requested />} />
        <Route path='/Settings' element={<Settings />} />
        <Route path='/RegisteredItems' element={<RegisteredItems />} />
        <Route path='/Settings2' element={<Settings2 />} />
        <Route path='/Settings7' element={<Settings7 />} />
        <Route path='/OrganizationPage' element={<OrganizationPage />} />
        <Route path='/event' element={<EventPage />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/about' element={<Aboutt />} />
      </Routes>
    </>
  )
}

export default App
