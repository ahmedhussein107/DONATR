import React from 'react';
import MyButton from '../../Components/MyButton/MyButton';
import { Link } from 'react-router-dom';

function Layout1() {
  return (
    <div style={{
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
    }}>
      <h2 style={{marginBottom: '10px', marginTop: '-80px', fontSize: '44px', fontFamily: 'Josefin Sans', fontWeight: '400', color: '#292F33'}}>Welcome Back!</h2>
      
      <p style={{ fontSize: '16px', fontFamily: 'Inter', textAlign: 'center' , color: '#292F33', marginBottom: '100px', fontWeight: '500' }}>Let's continue your journey of making a difference.</p>

      <input
        id="username"
        type="text"
        placeholder="Username"
        style={{
          width: '100%', 
          padding: '10px',
          border: '1px solid #ccc',
          borderRadius: '5px',
          marginBottom: '10px',
          color: 'black',
        }}
      />

      <input
        id="password"
        type="password"
        placeholder="Password"
        style={{
          width: '100%',
          padding: '10px',
          border: '1px solid #ccc',
          borderRadius: '5px',
          marginBottom: '10px',
          color: 'black',
        }}
      />

  

      <Link to="/forgot-password" style={{ marginLeft: '250px',   textDecoration: 'none', marginTop: '10px', color: '#666', fontSize: '16px', marginBottom: '30px' }}>
        Forgot your password?
      </Link>

      <MyButton
        label="Login"
        directory="/LoginPage"
        normalColor="#1D8AC5"
        hoverColor="#135E86"
        paddingWidth={10}
        paddingHeight={20}
        minimumWidth={140}
      />
      

      <p style={{ fontSize: '16px', color: '#292F33' }}>
        New to our platform?{" "}
        <Link to="/register" style={{ fontWeight: 'bold', textDecoration: 'underline', color: '#292F33' }}>
          Register
        </Link>{" "}
        to start making a difference!
      </p>
      
    </div>
  );
}

export default Layout1;
