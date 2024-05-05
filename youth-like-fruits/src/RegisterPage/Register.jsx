import ElevateAppBar from '.././Components/ElevateAppBar/ElevateAppBar.jsx'
import Footer from '.././Components/Footer/Footer.jsx'
import LeftSide from './Layouts/LeftSide.jsx'
import RightSide from './Layouts/RightSide.jsx'

function RegisterPage() {
  return (
    <div>
     <ElevateAppBar /> 
     <div style={{display: "flex", flexDirection: "row"}}>
      <LeftSide/>
      <RightSide/>
     </div>
     <Footer/>
    </div>
  )
}

export default RegisterPage