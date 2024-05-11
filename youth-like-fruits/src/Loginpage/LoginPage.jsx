import ElevateAppBar from '../Components/ElevateAppBar/ElevateAppBar.jsx'
import LeftSide from '../RegisterPage/Layouts/LeftSide.jsx'
import Layout1 from './components/Layout1.jsx'
import Layout2 from './components/Layout2.jsx'
import Alert from '@mui/material/Alert';
function LoginPage() {
  return (
    <div className='container'>
      <ElevateAppBar />
      <Layout1 />
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Layout2 />
      </div>
    </div>
  )
}

export default LoginPage
