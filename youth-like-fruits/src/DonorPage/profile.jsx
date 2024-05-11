import React from 'react';
import styled from 'styled-components';
import ahmed from '../assets/icons/avatar_12.jpg'
// Sample user data
const user = {
  name: 'John Doe',
  age: 30,
  email: 'johndoe@example.com',
  address: '123 Main St, City, Country',
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
  width: 600px; /* Increased width */
  background-color: #f0f0f0;
  padding: 30px; /* Increased padding */
  border-radius: 12px; /* Increased border radius */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Adjusted box shadow */
  display: flex; /* Use flexbox to stretch the box vertically */
  flex-direction: column; /* Align items in a column */
`;

const ProfileHeader = styled.h2`
  font-size: 28px; /* Increased font size */
  margin-bottom: 20px; /* Increased margin */
`;

const DetailItem = styled.div`
  margin-bottom: 15px; /* Increased margin */
`;

const Label = styled.span`
  font-weight: bold;
`;

const ProfileImage = styled.img`
  width: 200px;
  height: auto;
  border-radius: 8px;
  align-self: center; /* Center the image horizontally */
`;

const ProfilePage = () => {
  return (
    <ProfileContainer>
      <ProfileBox>
        <ProfileHeader>User Profile</ProfileHeader>
        <DetailItem>
          <Label>Name:</Label> {user.name}
        </DetailItem>
        <DetailItem>
          <Label>Age:</Label> {user.age}
        </DetailItem>
        <DetailItem>
          <Label>Email:</Label> {user.email}
        </DetailItem>
        <DetailItem>
          <Label>Address:</Label> {user.address}
        </DetailItem>
        <DetailItem>
          <Label>Occupation:</Label> {user.occupation}
        </DetailItem>
        <DetailItem>
          <Label>Interests:</Label> {user.interests.join(', ')}
        </DetailItem>
        <ProfileImage src={ahmed} alt="User's profile picture" />
      </ProfileBox>
    </ProfileContainer>
  );
};

export default ProfilePage;