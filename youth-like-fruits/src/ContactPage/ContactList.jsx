import React from 'react';
import MCQPDF from '../assets/MCQ.pdf'; // Import the PDF file

function LinkList() {
  const buttonStyle = {
    backgroundColor: '#292F33',
    color: 'white',
    padding: '20px 255px',
    fontSize: '1.2em',
    border: 'none',
    borderRadius: '8px',
    marginRight: '20px', // Add some spacing between buttons
    cursor: 'pointer',
    transition: 'background-color 0.3s', // Smooth transition for color change
  };

  const downloadMCQ = () => {
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = MCQPDF;
    link.download = 'Most_Common_Questions.pdf';

    // Simulate click on the link to trigger download
    link.click();
  };

  return (
    <div>
      <button 
        onClick={downloadMCQ}
        style={buttonStyle}
        onMouseEnter={(e) => e.target.style.backgroundColor = '#666666'} // Change color on hover
        onMouseLeave={(e) => e.target.style.backgroundColor = '#292F33'} // Restore original color on mouse leave
      >
        Most Common Questions
      </button>
      <button 
        onClick={() => window.location.href = '/form_page'}
        style={buttonStyle}
        onMouseEnter={(e) => e.target.style.backgroundColor = '#666666'} // Change color on hover
        onMouseLeave={(e) => e.target.style.backgroundColor = '#292F33'} // Restore original color on mouse leave
      >
        Contact Service
      </button>
    </div>
  );
}

export default LinkList;
