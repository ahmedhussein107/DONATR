import React from 'react';

function Layout1() {
  return (
    <div style={{
      position: 'absolute', // Ensure right-side positioning
      right: 0, // Align to the right edge
      top: 0, // Start from the top
      width: '50%', // Occupy half the screen width
      height: '100vh', // Stretch to full viewport height
      backgroundColor: '#D5E0E6',
      display: 'flex', // Enable vertical alignment
      flexDirection: 'column', // Stack elements vertically
      alignItems: 'center', // Center elements horizontally
      justifyContent: 'center', // Center elements vertically within the layout
      padding: '200px', // Add some padding for aesthetics
    }}>
      <h2 style={{ color: 'black', marginBottom: '20px', position: 'absolute', top: '264px', fontSize: '44px', fontFamily: 'Josefin Sans' }}>Welcome back!</h2>
      
      
      <p style={{ position: 'absolute', top: '322px', fontSize: '16px', fontFamily: 'Inter', textAlign: 'center' , color: '#000'}}>Let's continue your journey of making a difference.</p>

        <input
        id="username"
        type="text"
        placeholder="Username"
        style={{
          width: '100%', // Span the full width
          padding: '10px',
          border: '1px solid #ccc',
          borderRadius: '5px',
          marginBottom: '10px',
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
        }}
      />

      <a href="#" style={{ position: 'absolute', top: '607px', fontSize: '18px', fontFamily: 'Roboto', color: '#666' }}>
        Forgot your password?
      </a>

      <button
        style={{
          position: 'absolute',
          top: '700px',
          width: '120px',
          height: '53px',
          padding: '10px 20px',
          backgroundColor: '#1D8AC5', // Blue button color
          color: '#F9F9F9',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '18px',
          fontFamily: 'Roboto',
        }}
      >
        Login
      </button>

      {/* "New to our platform? Register..." text */}
      <p style={{ position: 'absolute', bottom: '50px', fontSize: '18px', fontFamily: 'Roboto', color: '#000', textAlign: 'center' }}>
        New to our platform? <strong style={{ fontWeight: 'bold', textDecoration: 'underline' , color: '#000'}}>Register</strong> to start making a difference!
      </p>
    </div>
  );
}

export default Layout1;
