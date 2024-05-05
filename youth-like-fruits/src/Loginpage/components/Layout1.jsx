import MyButton from '../../Components/MyButton/MyButton';
import { Link } from 'react-router-dom';
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function Layout1() {
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
        padding: '200px',
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

      <Box>
        <TextField
          id="username"
          label="UserName"
          variant="outlined"
          sx={{
            borderRadius: '8px', // Add border radius
            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', // Add box shadow
            width: 370,
            maxWidth: '100%', // Set the width to 100% to make it expand to the container width
            '&:focus': {
              borderColor: 'blue', // Change border color on focus
            },
          }}
        />
        <br />
        <br />
        <TextField
          id="pass"
          label="Password"
          variant="outlined"
          sx={{
            borderRadius: '8px', // Add border radius
            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', // Add box shadow
            width: 370,
            maxWidth: '100%', // Set the width to 100% to make it expand to the container width
            '&:focus': {
              borderColor: 'blue', // Change border color on focus
            },
          }}
        />
      </Box>

      <Link
        to="/forgot-password"
        style={{
          marginLeft: '195px',
          textDecoration: 'none',
          marginTop: '10px',
          color: '#666',
          fontSize: '16px',
          marginBottom: '30px',
        }}
      >
        Forgot your password?
      </Link>

      <MyButton
        label="Login"
        directory="/LoginPage"
        normalColor="#1D8AC5"
        hoverColor="#135E86"
        paddingWidth={14}
        paddingHeight={20}
        minimumWidth={200}
      />

      {/* New line at bottom, positioned absolutely */}
      <div
        style={{
          position: 'absolute',
          bottom: 0, // Position at the bottom
          left: 0, // Align to the left
          width: '100%', // Span the entire width
          display: 'flex',
          justifyContent: 'center', // Center the content horizontally
          alignItems: 'center', // Center the content vertically (optional)
          padding: '10px', // Add some padding if needed
          backgroundColor: '#D5E0E6', // Match background color (optional)
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