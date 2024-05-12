import React from 'react';
import privacyPolicyPDF from '../../assets/PP.pdf'; // Adjust the path as needed
import termsOfUsePDF from '../../assets/TOU.pdf'; // Adjust the path as needed

function Footer() {
  const downloadPdf = (pdfFile, fileName) => {
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = pdfFile;
    link.download = fileName;

    // Simulate click on the link to trigger download
    link.click();
  };

  return (
    <footer style={{ color: 'white', backgroundColor: '#292F33', width: '100%', height: '70px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 20px'}}>
      <div style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
        <a 
          href="#"
          onClick={() => downloadPdf(privacyPolicyPDF, 'PrivacyPolicy.pdf')} // Call downloadPdf function with Privacy Policy PDF
          style={{ 
            color: 'rgba(255, 255, 255, 0.7)',
            textDecoration: 'underline',
            fontSize: 'smaller'
          }}
        >
          Privacy Policy
        </a> | 
        <a 
          href="#"
          onClick={() => downloadPdf(termsOfUsePDF, 'TOU.pdf')} // Call downloadPdf function with Terms of Use PDF
          style={{ 
            color: 'rgba(255, 255, 255, 0.7)',
            textDecoration: 'underline',
            fontSize: 'smaller'
          }}
        >
          Terms of Use
        </a>
      </div>
      <div style={{ fontSize: 'smaller', textDecoration: 'underline' , color: 'rgba(255, 255, 255, 0.7)'}}>
        &copy; {new Date().getFullYear()} YouthLikeFruit. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
