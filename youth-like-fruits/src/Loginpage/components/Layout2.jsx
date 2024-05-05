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
    color: 'white', 
    fontSize: '1.2rem', 
  };

  const titleStyle = {
    fontFamily: 'Josefin Sans',
    fontWeight: 'Lato', 
    marginBottom: '1.5rem', 
    lineHeight: '1.4', 
    fontSize: '2.8rem', 
    color: 'WHITE', 
  };
  
  const listItemStyle = {
    fontFamily: 'Josefin Sans',
    fontWeight: 'Lato', 
    marginBottom: '1rem', 
    fontSize: '1.3rem', 
    color: 'WHITE', 
  };
  const buttonStyle = {
    height: 80, 
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
          minimumHeight={85}
        />
      </p>
    </div>
  );
}

export default Layout2;