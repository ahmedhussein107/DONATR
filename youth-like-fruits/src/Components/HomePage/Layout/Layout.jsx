import React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';

function TextLayout(props) {
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
    marginBottom: '5px', // Adjust spacing between paragraphs
  };

  const buttonStyle = {
    marginTop: '50px', // Add more space between paragraphs and button
    backgroundColor: '#1D8AC5',
    fontSize: '16px',
    fontWeight: 'bold',
    maxWidth: '200px',
    minHeight: '80px',
    alignProperty: 'center',
    marginLeft: '100px'
  };

  return (
    <div style={layoutStyle}>
      <p style={titleStyle}>
        ~ Welcome to <b style={{color: '#1F3C67'}}>DONATR!</b>
        <br></br>
        <br></br>
      </p>
      <p>
        <span style={{ color: 'black' , fontFamily:"Roboto" , fontSize: '38px' }}>Give Love For Saving</span>
        <br></br>
        <span style={{ fontWeight: 'bolder' , color: 'black' , fontFamily:"Roboto" , fontSize: '38px'}}>Fellow Humans</span>
        <br></br>
        <br></br>
      </p>
      <p style={paragraphStyle}>
        <span style={{ fontFamily: 'times new roman' , color: 'black' , fontStyle: 'italic', fontSize: '18px' , fontWeight: '150'}}>
        In a world where inequalities and needs abound, donations allow people to offer assistance to those in need, fostering greater unity within communities.
        </span>
      </p>
      <br></br>
      <br></br>
      <p>
        <span style={{ fontFamily: 'times new roman' , color: 'black' , fontStyle: 'italic', fontSize: '18px' , fontWeight: '150'}}>
        Sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua suspendisse ultrices gravida.
        </span>
      </p>
      <Button variant="contained" color="primary" style={buttonStyle}>
        Donate now
      </Button>
    </div>
  );
}

TextLayout.propTypes = {
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  text: PropTypes.string.isRequired,
  marginLeft: PropTypes.string,
};

export default TextLayout;