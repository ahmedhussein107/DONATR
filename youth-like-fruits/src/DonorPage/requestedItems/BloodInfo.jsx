import React, { useState } from 'react';
import styled from 'styled-components';
import TextField from '@mui/material/TextField';
import MyButton from '../../Components/MyButton/MyButton';
import { Alert, Button, Typography } from '@mui/material';
import img from '../../assets/blood_drop.webp'  

const BloodInfo = (props) => {
  const user = {
    hospitalName: props.hospitalName,
    governorate: props.governorate,
    area: props.area,
    hospitalAddress: props.hospitalAddress,
    patientName: props.patientName,
    bloodType: props.bloodType,
    image: props.image,
    date: props.date,
    fulfilButton: props.fulfilButton,
    handleButtonClick: props.handleButtonClick,
  };

  const ProfileContainer = styled.div`
    justify-content: center;
    align-items: flex-start;
    margin-top: 0.5vh;
    min-height: 70vh; /* Ensure the container takes up at least the full height of the viewport */
  `;

  const ProfileBox = styled.div`
    width: 140vh; /* Increased width */
    background-color: #f0f0f0;
    padding: 6vh; /* Increased padding */
    border-radius: 12px; /* Increased border radius */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Adjusted box shadow */
    display: flex; /* Use flexbox to stretch the box vertically */
    flex-direction: column; /* Align items in a column */
    min-height : 65vh
  `;

  const ProfileHeader = styled.h2`
    font-size: 28px; /* Increased font size */
    margin-left: 20px; /* Increased margin */
    margin-top : -20px;
  `;

  const DetailItem = styled.div`
    margin-bottom: 15px; /* Increased margin */
    align-items: center;
    margin-left: 20px;
    display:flex;
    width :300px;
    
  `;

  const Label = styled.span`
    font-weight: bold;
    width: 100px; /* Fixed width for labels */
  `;

  const ProfileImage = styled.img`
    width: 35vh;
    height: a<MyButton
    label="Fulfil"
    normalColor={user.fulfilButton.normalColor}
    hoverColor={user.fulfilButton.hoverColor}
    paddingWidth={14}
    paddingHeight={30}
    minimumWidth={200}
    minimumHeight={45}
    marginLeft={2.7}
    // clickHandler={handleButtonClick}
  />uto;
    border-radius: 700px;
    align-self: flex-end; /* Align image to the right */
    margin-left:150px;

  `;


  // const profileImageContainer = {
  //   display: 'flex',
  //   flexDirection: 'row-reverseconst profileImageContainer = {
  //   display: 'flex',
  //   flexDirection: 'row-reverse',
  //   marginLeft: '0.2vw'
  // }',
  //   marginLeft: '0.2vw'
  // }

  return (
    <ProfileContainer>
      <ProfileBox>
        <div style={{ justifyContent: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div></div>
              <ProfileHeader >Request Details</ProfileHeader>
              <></>
              <br />
              <div style={{ marginleft: '100px' }}>
              <div className='same-line-input'>
                    <DetailItem>
                    <TextField id="filled-basic" label="Blood Type" variant="filled" defaultValue={user.bloodType} InputProps={{
                      readOnly: true,
                    }} />
                  </DetailItem>
                    <DetailItem>
                        <TextField id="filled-basic" label="Patient Name" variant="filled" defaultValue={user.patientName} InputProps={{
                        readOnly: true,
                        }} />
                    </DetailItem>
                  
                </div>
                <div className='same-line-input'>
                  <DetailItem>
                    <TextField id="filled-basic" label="Hospital Name" variant="filled" defaultValue={user.hospitalName} InputProps={{
                      readOnly: true,
                    }} /> </DetailItem>
                  <DetailItem>
                    {/* <Label>Age:</Label> */}
                    <TextField id="filled-basic" label="Hospital Address" variant="filled" defaultValue={user.hospitalAddress} InputProps={{
                      readOnly: true,
                    }} />
                  </DetailItem>
                </div>
               
                <div className='same-line-input'>
                  <DetailItem>
                    {/* <Label>Address:</Label> */}
                    <TextField id="filled-basic" label="Governorate" variant="filled" defaultValue={user.governorate} InputProps={{
                      readOnly: true,
                    }} />
                  </DetailItem>
                  <DetailItem>
                    {/* <Label>Address:</Label> */}
                    <TextField id="filled-basic" label="Area" variant="filled" defaultValue={user.area} InputProps={{
                      readOnly: true,
                    }} />
                  </DetailItem>
                </div>
              </div>
            </div>
            <div style={{}}>
              <ProfileImage src={user.image} alt="User's profile picture" />
              {!(user.date==='') && <Typography 
                sx={{
                  textAlign: 'center' , 
                  marginLeft: '17vh' , 
                  marginTop: '2vh'
                }}>
              {`Published Date: ${user.date}`}
              </Typography>}
            </div>
          </div>
          <br />
          <br /> 
          <div style={{display: 'flex' , flexDirection: 'row'}}>
          {<MyButton
                label="Fulfil"
                directory={'/DonationPickupForm'}
                normalColor={user.fulfilButton.normalColor}
                hoverColor={user.fulfilButton.hoverColor}
                paddingWidth={14}
                paddingHeight={30}
                minimumWidth={200}
                minimumHeight={45}
                marginLeft={2.7}
                // clickHandler={handleButtonClick}
              />}
          </div>
        </div>
      </ProfileBox>
      {/* <div style={{ marginTop: '2%' }}>
        {showAlert && (
          <Alert severity="success" onClose={() => setShowAlert(false)}>
            Informations Updated Successfully.
          </Alert>)}
      </div> */}
    </ProfileContainer>
  );
};

BloodInfo.defaultProps = {
    hospitalName: '',
    governorate: '',
    area: '',
    hospitalAddress: '',
    patientName: '',
    bloodType: '',
  image: img,
  date: '',
  fulfilButton: {
    normalColor: "#1D8AC5",
    hoverColor: "#135E86"
  },
  handleButtonClick: () => {},
}

export default BloodInfo;