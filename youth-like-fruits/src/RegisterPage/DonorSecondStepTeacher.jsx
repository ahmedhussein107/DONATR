import ElevateAppBar from '../Components/ElevateAppBar/ElevateAppBar'
import Footer from '../Components/Footer/Footer'
import DonorForm from './Layouts/DonorForm'
import RegLeftSideSecond from './Layouts/RegLeftSideSecond'
import SecondFormTeacher from './Layouts/SecondFormTeacher'

function DonorSecondStepTeacher() {
  return (
    <div>
      <ElevateAppBar />
      <div style={{ display: "flex", flexDirection: "row" }}>
        <RegLeftSideSecond type={'Teacher'}/>
        <SecondFormTeacher/>
      </div>
      <Footer />
    </div>
  )
}

export default DonorSecondStepTeacher