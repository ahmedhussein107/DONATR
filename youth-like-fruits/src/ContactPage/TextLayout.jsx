import React from 'react';
import PropTypes from 'prop-types';

function TextLayoutt(props) {
    const { backgroundColor, textColor, text, marginLeft } = props;
  
    const layoutStyle = {
      backgroundColor: backgroundColor || "#D5E0E6", // Default background color
      color: textColor || 'black', // Default text color
      padding: '60px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      marginLeft: marginLeft || '0',
      display: 'flex',
      flexDirection: 'column',
      // alignItems: 'center', // Center contents horizontally
      minWidth: '10%', // Adjusted width
    };
  
    const titleStyle = {
      fontSize: '20px', // Adjust title font size
      fontFamily: 'sans-serif', // Adjust title font family
      marginBottom: '-10px', // Add space below title
      color: '#1F3C67'
    };
  
    const paragraphStyle = {
      marginBottom: '3%', // Adjust spacing between paragraphs
    };
  
    return (
      <div style={layoutStyle}>
        <p style={titleStyle}>
          You can reach us through: Contact_us@Donatr.org
          <br></br>
          <br></br>
        </p>
        <p>
          <span style={{ color: 'black' , fontFamily:"Roboto" , fontSize: '18px' }}>We would be pleased to see your opinions and hear you out on any comments</span>
        </p>  
      </div>
    );
  }
  
  TextLayoutt.propTypes = {
    backgroundColor: PropTypes.string,
    textColor: PropTypes.string,
    text: PropTypes.string.isRequired,
    marginLeft: PropTypes.string,
  };
  
  export default TextLayoutt;