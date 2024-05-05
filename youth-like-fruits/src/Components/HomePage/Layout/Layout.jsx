import React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import MyButton from '../../MyButton/MyButton';

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
    marginBottom: '3%', // Adjust spacing between paragraphs
  };

  const donateButton =  <MyButton 
                          label={'Donate now'}
                          directory={'/login'}
                          minimumWidth={225}
                          minimumHeight={78}
                          normalColor={'#1D8AC5'}
                          hoverColor={'#155E85'}
                          fontWeight={'bold'}
                          fontSize={'16px'}
                          paddingHeight={26}
                          paddingWidth={26}
                          marginLeft={'31%'}
                          marginTop={'12%'}
                        />

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
      <p>
        <span style={{ fontFamily: 'times new roman' , color: 'black' , fontStyle: 'italic', fontSize: '18px' , fontWeight: '150' , marginTop: '200px'}}>
        Sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua suspendisse ultrices gravida.
        </span>
      </p>
      {donateButton}
    </div>
  );
}

TextLayout.propTypes = {
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  text: PropTypes.string.isRequired,
  marginLeft: PropTypes.string,
};

export default TextLayout;