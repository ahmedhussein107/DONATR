import React, { useState } from 'react';
import MyButton from '../Components/MyButton/MyButton';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
function Layout1() {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  return (
    <div
      style={{
        position: 'absolute',
        right: 0,
        top: 0,
        width: '50%',
        height: '100vh',
        backgroundColor: '#D5E0E6',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0%',
      }}
    >
      <h2
        style={{
          marginBottom: '10px',
          marginTop: '-80px',
          fontSize: '44px',
          fontFamily: 'Josefin Sans',
          fontWeight: '400',
          color: '#292F33',
        }}
      >
        Welcome Back!
      </h2>

      <p
        style={{
          fontSize: '16px',
          fontFamily: 'Inter',
          textAlign: 'center',
          color: '#292F33',
          marginBottom: '100px',
          fontWeight: '500',
        }}
      >
        Let's continue your journey of making a difference.
      </p>

      <Box style={{ position: 'relative' }}>
        <TextField
          id="email"
          label="Email"
          variant="filled"
          sx={{
            borderRadius: '8px',
            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
            width: 370,
            maxWidth: '100%',
            '&:focus': {
              borderColor: 'blue',
            },
          }}
          onChange={handleEmailChange}
        />
        <br />
        <br />
        {/* Toggle visibility button */}
      </Box>

      <MyButton
        label="Submit"
        directory="/register"
        normalColor="#1D8AC5"
        hoverColor="#135E86"
        paddingWidth={14}
        paddingHeight={20}
        minimumWidth={200}
      />
      
      <div
        style={{
          position: 'absolute',
          bottom: '5%',
          left: 0,
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '10px',
          backgroundColor: '#D5E0E6',
        }}
      >
        <span style={{ color: 'black' }}>New to our platform?
        <Link to="/register" style={{ textDecoration: 'underline', marginLeft: '10px', color: 'black' }}>
          Register
                  </Link>
                  &nbsp;
        to start making a difference!
         </span>
      </div>
    </div>
  );
}

export default Layout1;
