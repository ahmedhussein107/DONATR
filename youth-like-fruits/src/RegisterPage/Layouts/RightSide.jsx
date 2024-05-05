import React from 'react';
import MyButton from '../../Components/MyButton/MyButton';
import { Link } from 'react-router-dom';

function RightSide() {
  return (
    <div style={{
      backgroundColor: '#D5E0E6',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '50%',
    }}>
      <div style={{fontFamily: 'Josefin Sans', fontWeight: '400', color: 'black'}}>
        <h2>Welcome to <b>DONATR</b></h2>
      </div>
    </div>
  );
}

export default RightSide;
