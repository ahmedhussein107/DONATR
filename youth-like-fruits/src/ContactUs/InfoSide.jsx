import React from 'react';
import * as Icon from 'react-feather';

function InfoSide() {
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
    margintop: '20%'
  };

  const titleStyle = {
    fontWeight: 'Lato', // Make the title bold
    marginBottom: '150%', // Add margin bottom for spacing between title and other items
    lineHeight: '1.4', // Set line height for the title (consider a global setting)
    fontSize: '200%', // Set font size for titles
    color: 'WHITE', // Example color (check contrast against background)
  };
  
  const listItemStyle = {
    fontWeight: 'Lato', // Make the title bold
    marginBottom: '0%', // Add some bottom margin to each list item for spacing
    fontSize: '120%', // Set font size for list items
    color: 'WHITE', // Example color (check contrast against background)
  };
  const buttonStyle = {
    height: 80, 
  };
  return (
    <div style={gradientStyle}>
      <div>
        <p>Contact Information</p>
        <p>Fill up the form and our team will get back to you within 24 hours</p>
      </div>
      <a href="tel:+233543201893">
        <Icon.Phone size={15} color="#F96E89" />
        <div>+233543201893</div>
      </a>
      <a href="mailto:aljay3334@gmail.com">
        <Icon.Mail size={15} color="#F96E89" />
        <div>Donatr@gmail.com </div>
      </a>
      <div>
        <div />
      </div>
      <div>
        <a href="https://www.facebook.com/ahmedyassertetoo/">
          <Icon.Facebook color="#FFFFFF" size={20} /> 
        </a>
        <a href="https://www.instagram.com/ahmed_y_tawfik/">
          <Icon.Instagram color="#FFFFFF" size={20} />
        </a>
        <a href="https://www.linkedin.com/in/ahmed-hussein-90172a267/">
          <Icon.Linkedin color="#FFFFFF" size={20} />
        </a>
      </div>
    </div>
  );
}

export default InfoSide;