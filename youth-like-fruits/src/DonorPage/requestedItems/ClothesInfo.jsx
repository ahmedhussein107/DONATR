import React, { useState } from 'react';
import styled from 'styled-components';
import TextField from '@mui/material/TextField';
import MyButton from '../../Components/MyButton/MyButton';
import { Alert, Typography } from '@mui/material';
import img from '../../assets/icons/avatar_12.jpg'

const ClothesInfo = (props) => {
  const user = {
    age: props.age,
    gender: props.gender,
    season: props.season,
    material: props.material,
    quantity: props.quantity,
    itemName: props.itemName,
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
    height: auto;
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
  ClothesInfo

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
                    <TextField id="filled-basic" label="Age" variant="filled" defaultValue={user.age} InputProps={{
                      readOnly: true,
                    }} /> </DetailItem>
                  <DetailItem>
                    {/* <Label>Age:</Label> */}
                    <TextField id="filled-basic" label="Gender" variant="filled" defaultValue={user.gender} InputProps={{
                      readOnly: true,
                    }} />
                  </DetailItem>
                </div>
                <div className='same-line-input'>
                  <DetailItem>
                    {/* <Label>Email:</Label> */}
                    <TextField id="filled-basic" label="Season" variant="filled" defaultValue={user.season} InputProps={{
                      readOnly: true,
                    }} />
                  </DetailItem>
                  <DetailItem>
                    {/* <Label>Phone Number:</Label> */}
                    <TextField id="filled-basic" label="Material" variant="filled" defaultValue={user.material} InputProps={{
                      readOnly: true,
                    }} />
                  </DetailItem>
                </div>
                <div className='same-line-input'>
                  <DetailItem>
                    {/* <Label>Address:</Label> */}
                    <TextField id="filled-basic" label="Quantity" variant="filled" defaultValue={user.quantity} InputProps={{
                      readOnly: true,
                    }} />
                  </DetailItem>
                  <DetailItem>
                    {/* <Label>State:</Label> */}
                    <TextField id="filled-basic" label="Item Name" variant="filled" defaultValue={user.itemName} disa InputProps={{
                      readOnly: true,
                    }} bled />
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

ClothesInfo.defaultProps = {
  age: 20,
  season: 'Summer',
  material: 'Cotton',
  itemName: 'Shirt',
  image: img,
  date: '',
  fulfilButton: {
    normalColor: "#1D8AC5",
    hoverColor: "#135E86"
  },
  handleButtonClick: () => {},
}

export default ClothesInfo;