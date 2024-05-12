import React from 'react';
import PropTypes from 'prop-types';
import { FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import charityPic from '.././assets/Hospital.jpeg';

function ContactInfo() {
  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    fontFamily: 'Arial, sans-serif',
    fontSize: '22px',
    lineHeight: '1.5',
    marginBottom: '20px',
    marginTop: '-60px',
    color: 'black', // Text color
  };

  const imageContainerStyle = {
    flex: '0 0 auto',
    marginRight: '-180px',
  };

  const imageStyle = {
    width: '80%',
    height: '20%',
    objectFit: 'cover',
  };

  const textContainerStyle = {
    flex: '1',
  };

  const listItemStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
  };

  const iconStyle = {
    marginRight: '20px',
  };

  const smallerTextStyle = {
    fontSize: '18px',
    marginTop: '-10px', 
    marginLeft: '30px',
    color: 'black'
  };

  const linkStyle = {
    color: 'blue', // Change link color to blue
    textDecoration: 'underline',
  };

  return (
    <div style={containerStyle}>
      <div style={imageContainerStyle}>
        <img className='charityImage' src={charityPic} alt="charity image" style={imageStyle} />
      </div>
      <div style={textContainerStyle}>
        <div style={listItemStyle}>
          <span>Contact us:</span>
        </div>
        <div style={listItemStyle}>
          <FaPhone style={iconStyle} />
          <span>Hotline: 19057</span>
        </div>
        <div style={listItemStyle}>
          <FaPhone style={iconStyle} />
          <span>Phone: (202) 25351500 (30 lines)</span>
        </div>
        <div style={listItemStyle}>
          <FaMapMarkerAlt style={iconStyle} />
          <span>Cairo branch Address: <a href="https://www.google.com/maps?q=57375 Cairo" style={linkStyle}>Get Directions</a></span>
        </div>
        <div style={{ ...listItemStyle, ...smallerTextStyle }}>
          <span>1 Seket Al-Emam Street – El-Madbah El-Kadeem Yard – El-Saida Zenab</span>
        </div>
        <div style={listItemStyle}>
          <FaMapMarkerAlt style={iconStyle} />
          <span>Tanta branch Address: <a href="https://www.google.com/maps?q=Tanta" style={linkStyle}>Get Directions</a></span>
        </div>
        <div style={{ ...listItemStyle, ...smallerTextStyle }}>
          <span>Othman Mohamad street adjacent to Al Helal Hospital</span>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
