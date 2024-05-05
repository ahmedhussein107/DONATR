import React from 'react';

function Layout2() {
  const gradientStyle = {
    background: `linear-gradient(to bottom, #3C4F59, #426D84)`,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    minHeight: '93.5vh',
  };

  const contentStyle = {
    color: 'white', // Set text color to white
    fontSize: '1.2rem', // Adjust font size as needed
  };

  const listItemStyle = {
    marginBottom: '0.5rem', // Add some bottom margin to each list item for spacing
  };

  return (
    <div style={gradientStyle}>
      <p style={contentStyle}>
        <b>Trusted by thousands of nonprofits, schools, churches, and businesses</b>
        <br/>
        <br/> {/* Line break for better formatting */}
        <ul style={{ listStyleType: 'none', paddingLeft: '0' }}> {/* Unordered list for styling */}
          <li style={listItemStyle}>✔️ Simple to Use and Customize</li>
          <li style={listItemStyle}>✔️ Affordable, Scalable Pricing</li>
          <li style={listItemStyle}>✔️ No Hidden Fees or Add-on Costs</li>
          <li style={listItemStyle}>✔️ Safe, Secure Pages & Forms</li>
          <li style={listItemStyle}>✔️ Great Customer Support</li>
        </ul>
      </p>
    </div>
  );
}

export default Layout2;