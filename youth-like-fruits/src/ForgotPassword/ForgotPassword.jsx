import ElevateAppBar from '../Components/ElevateAppBar/ElevateAppBar.jsx'
import LeftSide from '../RegisterPage/Layouts/LeftSide.jsx'
import Layout1 from './Layout1.jsx';
import Layout2 from '../Loginpage/components/Layout2.jsx';
import Alert from '@mui/material/Alert';
import React from 'react';
function ForgotPassword() {
  return (
    <div className='container'>
      <ElevateAppBar />
      <Layout1/>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Layout2 />
      </div>
    </div>
  )
}

export default ForgotPassword;