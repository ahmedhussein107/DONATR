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
      {/* Text at the top */}
      <h2 style={{ color: 'black', marginBottom: '20px' }}>Login</h2>

      {/* Username field */}
      <input
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

      {/* Password field */}
      <input
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

      {/* Login button */}
      <button
        style={{
          padding: '10px 20px',
          backgroundColor: '#007bff', // Blue button color
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Login
      </button>

      {/* "Forgot your password?" link */}
      <a href="#" style={{ fontSize: '12px', color: '#666', marginTop: '10px' }}>
        Forgot your password?
      </a>
    </div>
  );
}

export default Layout1;