import React, { useState } from 'react';
import styled from 'styled-components';
import ahmed from '../assets/icons/avatar_12.jpg';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MyButton from '../Components/MyButton/MyButton';

// Sample user data
const user = {
  name: 'John Doe',
  age: 30,
  email: 'johndoe@example.com',
  address: '123 Main St',
  state: 'City',
  country: 'Country',
  occupation: 'Software Engineer',
  interests: ['Reading', 'Traveling', 'Cooking'],
  // Add more details as needed
};

// Styled components for styling the profile box
const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-top: 50px;
  min-height: 100vh; /* Ensure the container takes up at least the full height of the viewport */
`;

const ProfileBox = styled.div`
  width: 140vh; /* Increased width */
  background-color: #f0f0f0;
  padding: 30px; /* Increased padding */
  border-radius: 12px; /* Increased border radius */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Adjusted box shadow */
  display: flex; /* Use flexbox to stretch the box vertically */
  flex-direction: column; /* Align items in a column */
  min-height : 500px
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
  margin-left:200px;

`;

const EditButton = styled(Button)`
  margin-top: 20px;
  align-self: flex-end;
`;

const profileImageContainer = {
  display: 'flex',
  flexDirection: 'row-reverse',
  marginLeft: '60px'
}

const ProfilePage = () => {
  const [editableFields, setEditableFields] = useState({
    name: user.name,
    age: user.age,
    email: user.email,
    address: user.address,
    state: user.state,
    country: user.country,
    occupation: user.occupation,
    interests: user.interests.join(', '),
  });

  const handleFieldChange = (fieldName, value) => {
    setEditableFields({
      ...editableFields,
      [fieldName]: value,
    });
  };

  const handleEditButtonClick = () => {
    // Implement your edit functionality here
    console.log('Edit button clicked');
  };
  const ageChange = (event) => {
    setPassword(event.target.value);
  };
  const PasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const usernameChange = (event) => {
    setPassword(event.target.value);
  };
  const adderssChange = (event) => {
    setPassword(event.target.value);
  };
  const emailChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <ProfileContainer>
      <ProfileBox>
        <div style={{ justifyContent: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div></div>
              <ProfileHeader >User Profile</ProfileHeader>
              <></>
              <br />
              <div style={{ marginleft: '100px' }}>
                <div className='same-line-input'>
                  <DetailItem>
                    {/* <Label>Name:</Label> */}
                    <TextField id="filled-basic" label="Name" variant="filled" defaultValue={user.name} />
                  </DetailItem>
                  <DetailItem>
                    {/* <Label>Age:</Label> */}
                    <TextField id="filled-basic" label="Age" variant="filled" defaultValue={user.age} />
                  </DetailItem>
                </div>
                <div className='same-line-input'>
                  <DetailItem>
                    {/* <Label>Email:</Label> */}
                    <TextField id="filled-basic" label="Email" variant="filled" defaultValue={user.email} />
                  </DetailItem>
                  <DetailItem>
                    {/* <Label>Address:</Label> */}
                    <TextField id="filled-basic" label="Address" variant="filled" defaultValue={user.address} />
                  </DetailItem>
                </div>
                <div className='same-line-input'>
                  <DetailItem>
                    {/* <Label>State:</Label> */}
                    <TextField id="filled-basic" label="State" variant="filled" defaultValue={user.state} />
                  </DetailItem>
                  <DetailItem>
                    {/* <Label>Country:</Label> */}
                    <TextField id="filled-basic" label="Country" variant="filled" defaultValue={user.country} />
                  </DetailItem>
                </div>
                <div className='same-line-input'>
                  <DetailItem>
                    {/* <Label>Occupation:</Label> */}
                    <TextField id="filled-basic" label="Occupation" variant="filled" defaultValue={user.occupation} />
                  </DetailItem>
                  <DetailItem>
                    {/* <Label>Interests:</Label> */}
                    <TextField id="filled-basic" label="Interests" variant="filled" defaultValue={user.interests.join(', ')} />
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
            label="Edit"
            directory="/form_page"
            normalColor="#1D8AC5"
            hoverColor="#135E86"
            paddingWidth={14}
            paddingHeight={30}
            minimumWidth={200}
            minimumHeight={45}
            marginLeft={2.7}
          />
        </div>
      </ProfileBox>
    </ProfileContainer>
  );
};




export default ProfilePage;