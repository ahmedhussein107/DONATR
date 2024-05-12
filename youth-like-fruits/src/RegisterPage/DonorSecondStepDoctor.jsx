import ElevateAppBar from '../Components/ElevateAppBar/ElevateAppBar'
import Footer from '../Components/Footer/Footer'
import DonorForm from './Layouts/DonorForm'
import RegLeftSideSecond from './Layouts/RegLeftSideSecond'
import SecondFormDoctor from './Layouts/SecondFormDoctor'

function DonorSecondStepDoctor() {
  return (
    <div>
      <ElevateAppBar />
      <div style={{ display: "flex", flexDirection: "row" }}>
        <RegLeftSideSecond type={'Doctor'}/>
        <SecondFormDoctor/>
      </div>
      <Footer />
    </div>
  )
}

export default DonorSecondStepDoctor