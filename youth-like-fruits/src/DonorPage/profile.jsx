import React, { useState } from 'react';
import styled from 'styled-components';
import ahmed from '../assets/icons/avatar_12.jpg';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MyButton from '../Components/MyButton/MyButton';
import { Alert } from '@mui/material';

const ProfilePage = (props) => {
  const header = props.header;
  // Sample user data
  const user = {
    name: props.name,
    age: props.age,
    email: props.email,
    address: props.address,
    state: props.state,
    country: props.country,
    occupation: props.occupation,
    phoneNumber: props.phoneNumber,
    // Add more details as needed
  };

  // Styled components for styling the profile box
  const ProfileContainer = styled.div`
    justify-content: center;
    align-items: flex-start;
    margin-top: 0.5vh;
    min-height: 80vh; /* Ensure the container takes up at least the full height of the viewport */
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

  const EditButton = styled(Button)`
    margin-top: 20px;
    align-self: flex-end;
  `;

  const profileImageContainer = {
    display: 'flex',
    flexDirection: 'row-reverse',
    marginLeft: '0.2vw'
  }
  const [editableFields, setEditableFields] = useState({
    name: user.name,
    age: user.age,
    email: user.email,
    address: user.address,
    state: user.state,
    country: user.country,
    occupation: user.occupation,
    phoneNumber: user.phoneNumber,
  });

  const handleFieldChange = (fieldName, value) => {
    setEditableFields({
      ...editableFields,
      [fieldName]: value,
    });
  };

  const [showAlert, setShowAlert] = useState(false);
  setTimeout(() => {
    setShowAlert(false);
  }, 5000);

  const handleButtonClick = () => {
    setShowAlert(true);
  };


  return (
    <ProfileContainer>
      <ProfileBox>
        <div style={{ justifyContent: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div></div>
              <ProfileHeader >{header}</ProfileHeader>
              <></>
              <br />
              <div style={{ marginleft: '100px' }}>
                <div className='same-line-input'>
                  <DetailItem>
                    {/* <Label>Name:</Label> */}
                    <TextField id="filled-basic" label="Name" variant="filled" defaultValue={user.name} InputProps={{
                      readOnly: true,
                    }} /> </DetailItem>
                  <DetailItem>
                    {/* <Label>Age:</Label> */}
                    <TextField id="filled-basic" label="Age" variant="filled" defaultValue={user.age} InputProps={{
                      readOnly: true,
                    }} />
                  </DetailItem>
                </div>
                <div className='same-line-input'>
                  <DetailItem>
                    {/* <Label>Email:</Label> */}
                    <TextField id="filled-basic" label="Email" variant="filled" defaultValue={user.email} InputProps={{
                      readOnly: true,
                    }} />
                  </DetailItem>
                  <DetailItem>
                    {/* <Label>Phone Number:</Label> */}
                    <TextField id="filled-basic" label="Phone Number" variant="filled" defaultValue={user.phoneNumber} InputProps={{
                      readOnly: true,
                    }} />
                  </DetailItem>
                </div>
                <div className='same-line-input'>
                  <DetailItem>
                    {/* <Label>Address:</Label> */}
                    <TextField id="filled-basic" label="Address" variant="filled" defaultValue={user.address} InputProps={{
                      readOnly: true,

                    }} />
                  </DetailItem>
                  <DetailItem>
                    {/* <Label>State:</Label> */}
                    <TextField id="filled-basic" label="State" variant="filled" defaultValue={user.state} disa InputProps={{
                      readOnly: true,

                    }} bled />
                  </DetailItem>
                </div>
                <div className='same-line-input'>
                <DetailItem>
                    {/* <Label>Country:</Label> */}
                    <TextField id="filled-basic" label="Country" variant="filled" defaultValue={user.country} InputProps={{
                      readOnly: true,

                    }} />
                  </DetailItem>
                  <DetailItem>
                    {/* <Label>Occupation:</Label> */}
                    <TextField id="filled-basic" label="Role" variant="filled" defaultValue={user.occupation} />
                  </DetailItem>
                </div>
              </div>
            </div>
            <div style={profileImageContainer}>
              <ProfileImage src={ahmed} alt="User's profile picture" />
            </div>
          </div>
          <br />
          <br />
          <MyButton
            label="Save"
            normalColor="#1D8AC5"
            hoverColor="#135E86"
            paddingWidth={14}
            paddingHeight={30}
            minimumWidth={200}
            minimumHeight={45}
            marginLeft={2.7}
            clickHandler={handleButtonClick}
          />
        </div>
      </ProfileBox>
      <div style={{ marginTop: '2%' }}>
        {showAlert && (
          <Alert severity="success" onClose={() => setShowAlert(false)}>
            Informations Updated Successfully.
          </Alert>)}
      </div>
    </ProfileContainer>
  );
};

ProfilePage.defaultProps = {
  header: 'User Profile',
  name: 'John Doe',
  age: 30,
  email: 'johndoe@example.com',
  address: '123 Main St',
  state: 'Cairo',
  country: 'Egypt',
  occupation: 'Regular',
  phoneNumber: '+20 111 7621 421',
}

export default ProfilePage;