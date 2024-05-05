
import React from 'react';

function MyComponent({ onLoginClick }) {
  return (
    <div>
      <button
        onClick={onLoginClick}
        style={{
          backgroundColor: '#1D8AC5',
          color: 'white',
          textDecoration: 'none',
          textTransform: 'none',
          padding: '8px 25px',
          minWidth: '140px',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
          display: 'inline-block',
          textAlign: 'center',
          borderRadius: '4px',
        }}
      >
        Login
      </button>
    </div>
  );
}

export default MyComponent;