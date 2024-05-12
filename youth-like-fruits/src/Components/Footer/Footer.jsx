import React from 'react';
import privacyPolicyPDF from '../../assets/PP.pdf'; // Adjust the path as needed

function Footer() {
  const downloadPdf = () => {
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = privacyPolicyPDF;
    link.download = 'PrivacyPolicy.pdf';

    // Simulate click on the link to trigger download
    link.click();
  };

  return (
    <footer style={{ color: 'white', backgroundColor: '#292F33', width: '100%', height: '70px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 20px'}}>
      <div style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
        <a 
          href="#"
          onClick={downloadPdf} // Call downloadPdf function on click
          style={{ 
            color: 'rgba(255, 255, 255, 0.7)',
            textDecoration: 'underline',
            fontSize: 'smaller'
          }}
        >
          Privacy Policy
        </a> | 
        <a href="/terms-of-use" style={{ color: 'rgba(255, 255, 255, 0.7)', textDecoration: 'underline', fontSize: 'smaller' }}> Terms of Use </a>
      </div>
      <div style={{ fontSize: 'smaller', textDecoration: 'underline' , color: 'rgba(255, 255, 255, 0.7)'}}>
        &copy; {new Date().getFullYear()} YouthLikeFruit. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
