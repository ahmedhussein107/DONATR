import React from 'react';

function Footer() {
  return (
    <footer style={{ color: 'white', backgroundColor: '#292F33', width: '100%', height: '100px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 20px' }}>
    <div style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
      <a href="/privacy-policy" style={{ color: 'rgba(255, 255, 255, 0.7)', textDecoration: 'underline' }}>Privacy Policy</a> | 
      <a href="/terms-of-use" style={{ color: 'rgba(255, 255, 255, 0.7)', textDecoration: 'underline' }}>Terms of Use</a>
    </div>
      <div style={{ fontSize: 'larger', textDecoration: 'underline' }}>
        &copy; {new Date().getFullYear()} YouthLikeFruit. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;