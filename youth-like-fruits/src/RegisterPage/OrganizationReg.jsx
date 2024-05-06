
import './OrganizationReg.css'
import RegistrationForm from './Layouts/RegistrationForm'
import ElevateAppBar from '../Components/ElevateAppBar/ElevateAppBar'
ElevateAppBar
import Footer from '../Components/Footer/Footer'
import OrganizationRegLeftSide from './Layouts/OrganizationRegLeftSide'
const OrganizationReg = () => {
  return (
    <div>
      <ElevateAppBar />
      <div style={{ display: "flex", flexDirection: "row" }}>
        <OrganizationRegLeftSide/>
        <RegistrationForm />
      </div>
      <Footer />
    </div>
  )
}

export default OrganizationReg