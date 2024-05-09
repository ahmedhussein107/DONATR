import ElevateAppBar from '../Components/ElevateAppBar/ElevateAppBar'
import Footer from '../Components/Footer/Footer'
import DonorForm from './Layouts/DonorForm'
import RegLeftSide from './Layouts/RegLeftSide'
const DonorReg = () => {
  return (
    <div>
      <ElevateAppBar />
      <div style={{ display: "flex", flexDirection: "row" }}>
        <RegLeftSide/>
        <DonorForm/>
      </div>
      <Footer />
    </div>
  )
}

export default DonorReg