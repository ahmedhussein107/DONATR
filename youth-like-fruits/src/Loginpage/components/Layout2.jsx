import React from 'react';
import MyButton from '../../Components/MyButton/MyButton.jsx'
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

  const titleStyle = {
    fontWeight: 'Lato', // Make the title bold
    marginBottom: '1.5rem', // Add margin bottom for spacing between title and other items
    lineHeight: '1.4', // Set line height for the title (consider a global setting)
    fontSize: '2.8rem', // Set font size for titles
    color: 'WHITE', // Example color (check contrast against background)
  };
  
  const listItemStyle = {
    fontWeight: 'Lato', // Make the title bold
    marginBottom: '1rem', // Add some bottom margin to each list item for spacing
    fontSize: '1.3rem', // Set font size for list items
    color: 'WHITE', // Example color (check contrast against background)
  };
  const buttonStyle = {
    height: 80, // Adjust height as desired (in pixels)
    // OR (if MyButton component supports height prop)
    // ...MyButton.defaultProps,
    // height: 50, // Set height in MyButton props
  };
  return (
    <div style={gradientStyle}>
      <p style={contentStyle}>
        <span style={titleStyle}>Trusted by thousands of nonprofits,<br/>  schools, churches, and businesses</span>
        <br />
        <br />
        <br />
    
        <span style={listItemStyle}>✔️ Simple to Use and Customize</span>
        <br />
        <span style={listItemStyle}>✔️ Affordable, Scalable Pricing</span>
        <br />
        <span style={listItemStyle}>✔️ No Hidden Fees or Add-on Costs</span>
        <br />
        <span style={listItemStyle}>✔️ Safe, Secure Pages & Forms</span>
        <br />
        <span style={listItemStyle}>✔️ Great Customer Support</span>
        <br/>
        <br/>
        <br/>
        <MyButton
          label={'Talk To Our Support Team'}
          normalColor='#1D8AC5'
          hoverColor={'#155E85'}
          minimumWidth={300}
          style={buttonStyle} // Apply inline styles for height
        />
      </p>
    </div>
  );
}

export default Layout2;