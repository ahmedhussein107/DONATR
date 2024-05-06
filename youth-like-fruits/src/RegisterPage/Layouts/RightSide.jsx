import React, { useState } from 'react';
import DonorIcon from '../.././assets/donor_icon.png';
import OrganizationIcon from '../.././assets/organization_icon.png';
import { Link } from 'react-router-dom';
import MyButton from '../../Components/MyButton/MyButton';
import { useNavigate } from 'react-router-dom';

const options = [
  { value: 'Donor', imageUrl: DonorIcon, label: 'Donor' },
  { value: 'Organization', imageUrl: OrganizationIcon, label: 'Organization' },
];

function RightSide() {
  const [selectedOption, setSelectedOption] = useState('');
  const navigate = useNavigate();

  const handleOptionClick = (optionValue) => {
    setSelectedOption(optionValue);
  };

  const handleButtonClick = () => {
    alert('Im here')
    navigate(`/register/${selectedOption}`)
  }
  
  return (
    <div
      style={{
        backgroundColor: '#D5E0E6',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '50%',
        padding: '10%',
      }}
    >
      <h2
        style={{
          fontSize: '44px',
          fontFamily: 'Josefin Sans',
          fontWeight: '400',
          color: '#292F33',
          textAlign: 'center',
        }}
      >
        Welcome to <b style={{
          fontSize: '44px',
          fontFamily: 'Josefin Sans',
          fontWeight: '400',
          color: '#292F33',
          textAlign: 'center',
        }}>DONATR</b>
      </h2>
      <p style={{ fontSize: '20px', fontFamily: 'Josefin Sans', fontWeight: '400', color: '#292F33' , marginBottom: '10px'}}>
        Let's unlock the power of giving
      </p>
      <svg width="100%" height="2">
        <line x1="40%" y1="1" x2="60%" y2="1" stroke="#000" strokeWidth="2" />
      </svg>

      <div style={{ marginTop: '20px', marginBottom: '30px', display: 'flex', flexDirection: 'column', justifyContent: 'space-around', width: '100%', textAlign:'center'}}>
        <p style={{fontSize: '20px', fontFamily: 'Josefin Sans', fontWeight: '500',color: '#292F33', marginBottom: '15px'}}>Step 1</p>
        <p style={{fontSize: '20px', fontFamily: 'Josefin Sans', fontWeight: '300',color: '#292F33'}}>Pick A Role</p>
        <div style={{ marginTop: '20px', marginBottom: '30px', display: 'flex', justifyContent: 'space-around', width: '100%' }}>
          {options.map((option) => (
            <div key={option.value} style={{ textAlign: 'center', cursor: 'pointer' }} onClick={() => handleOptionClick(option.value)}>
              <img
                src={option.imageUrl}
                alt={option.label}
                style={{ width: '100px', height: '100px', opacity: selectedOption === option.value ? 1 : 0.5 }}
              />
              <p style={{fontSize: '20px', fontFamily: 'Josefin Sans', fontWeight: '400', color: '#292F33' }}>{option.label}</p>
            </div>
          ))}
        </div>
        {selectedOption === '' ? <></>:
          <MyButton 
          label= 'Next'
          directory= {`/register/${selectedOption}`}
          normalColor = '#1D8AC5'
          hoverColor = '#155E85'
          
        />
        }
        
      </div>
      
      <div style={{
            position: 'relative',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#D5E0E6',
        }}
      >
        <span style={{ color: 'black' }}>Already have an account?
        <Link to="/login" style={{ textDecoration: 'underline', marginLeft: '10px', color: 'black' }}>
          Login</Link>   to continue making a difference!
         </span>
      </div>
    </div>
  );
}

export default RightSide;
