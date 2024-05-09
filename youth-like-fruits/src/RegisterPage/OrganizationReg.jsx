import RegistrationForm from './Layouts/RegistrationForm'
import ElevateAppBar from '../Components/ElevateAppBar/ElevateAppBar'
import Footer from '../Components/Footer/Footer'
import RegLeftSide from './Layouts/RegLeftSide'
const OrganizationReg = () => {
  return (
    <div>
      <ElevateAppBar />
      <div style={{ display: "flex", flexDirection: "row" }}>
        <RegLeftSide/>
        <RegistrationForm />
      </div>
      <Footer />
    </div>
  )
}

export default OrganizationReg