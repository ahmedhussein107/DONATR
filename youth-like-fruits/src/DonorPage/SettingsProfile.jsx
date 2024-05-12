import React, { useState } from 'react';
import styled from 'styled-components';
import ahmed from '../assets/icons/avatar_12.jpg';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MyButton from '../Components/MyButton/MyButton';
import { Alert } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { TbBackground } from 'react-icons/tb';
// Sample user data
const user = {
    name: 'John Doe',
    age: 30,
    email: 'johndoe@example.com',
    address: '123 Main St',
    state: 'Cairo',
    country: 'Egypt',
    occupation: 'Software Engineer',
    interests: ['Reading', 'Traveling', 'Cooking'],
    username: 'Al7ra2'
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
  margin-top: -20px;
`;

const DetailItem = styled.div`
  margin-bottom: 15px; /* Increased margin */
  align-items: center;
  margin-left: 20px;
  display: flex;
  width: 300px;
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
  margin-left: 150px;
`;

const EditButton = styled(Button)`
  margin-top: 20px;
  align-self: flex-end;
`;

const profileImageContainer = {
    display: 'flex',
    flexDirection: 'row-reverse',
    marginLeft: '60px'
};

const SettingsProfile = () => {
    const [editableFields, setEditableFields] = useState({
        name: user.name,
        age: user.age,
        email: user.email,
        address: user.address,
        state: user.state,
        country: user.country,
        occupation: user.occupation,
        interests: user.interests.join(', '),
        username: user.username,
        oldPassword: '',
        newPassword: ''
    });

    const [password, setPassword] = useState('');
    const handleFieldChange = (fieldName, value) => {
        setEditableFields({
            ...editableFields,
            [fieldName]: value,
        });
    };

    const [showAlert, setShowAlert] = useState(false);

    const handleButtonClick = () => {
        // Check if old password, new password, or username is empty
        if (!editableFields.oldPassword || !editableFields.newPassword || !editableFields.username) {
            // If any of the required fields are empty, show error alert
            setShowAlert({
                type: 'error',
                message: 'Please fill out all required fields (Old Password, New Password, Username).',
            });
        } else {
            // If all required fields are filled, update the information and show success alert
            setShowAlert({
                type: 'success',
                message: 'Informations Updated Successfully.',
            });
            // Here you can update the information
        }
    };

    const [showPassword, setShowPassword] = useState(false);
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <ProfileContainer>
            <ProfileBox>
                <div style={{ justifyContent: 'center' }}>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <div></div>
                            <ProfileHeader >Profile</ProfileHeader>
                            <br />
                            <div style={{ marginleft: '100px' }}>
                                <div className='same-line-input'>
                                    <DetailItem>
                                        <TextField id="filled-basic" label="Name" variant="filled" value={editableFields.name} disabled />
                                    </DetailItem>
                                    <DetailItem>
                                        <TextField id="filled-basic" label="Username" variant="filled" value={editableFields.username} onChange={(e) => handleFieldChange('username', e.target.value)} />
                                    </DetailItem>
                                </div>
                                <div className='same-line-input'>
                                    <DetailItem>
                                        <TextField id="filled-basic" label="Email" variant="filled" value={editableFields.email} disabled />
                                    </DetailItem>
                                    <DetailItem>
                                        <TextField id="filled-basic" label="Address" variant="filled" value={editableFields.address} onChange={(e) => handleFieldChange('address', e.target.value)} />
                                    </DetailItem>
                                </div>
                                <div className='same-line-input'>
                                    <DetailItem>
                                        <TextField
                                            id="oldPassword"
                                            label="Old Password"
                                            type={showPassword ? 'text' : 'password'}
                                            variant="filled"
                                            value={editableFields.oldPassword}
                                            onChange={(e) => handleFieldChange('oldPassword', e.target.value)}
                                        />
                                    </DetailItem>
                                    <DetailItem>
                                        <TextField
                                            id="newPassword"
                                            label="New Password"
                                            type={showPassword ? 'text' : 'password'}
                                            variant="filled"
                                            value={editableFields.newPassword}
                                            onChange={(e) => handleFieldChange('newPassword', e.target.value)}
                                        />
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
                    <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '5%' }}>
                        <MyButton
                            label="Update Informations"
                            normalColor="#1D8AC5"
                            hoverColor="#135E86"
                            paddingWidth={14}
                            paddingHeight={30}
                            minimumWidth={200}
                            minimumHeight={45}
                            marginLeft={2.7}
                            clickHandler={handleButtonClick}
                        />
                        <React.Fragment>
                            <MyButton
                                label="Delete My Account"
                                normalColor="#8B0000"
                                hoverColor="#6B0000"
                                paddingWidth={14}
                                paddingHeight={30}
                                minimumWidth={200}
                                minimumHeight={45}
                                marginLeft={2.7}
                                clickHandler={handleClickOpen}
                            />
                            <Dialog
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="alert-dialog-title"
                                aria-describedby="alert-dialog-description"
                            >
                                <DialogTitle id="alert-dialog-title">
                                    {"Delete Account?"}
                                </DialogTitle>
                                <DialogContent>
                                    <DialogContentText id="alert-dialog-description">
                                        Are you sure you want to delete your account? This action is irreversible
                                        and all your data will be lost.
                                    </DialogContentText>
                                </DialogContent>
                                <DialogActions>
                                    <MyButton
                                        clickHandler={handleClose}
                                        label="Disagree"
                                        directory=""
                                        normalColor="#292F33"
                                        hoverColor="#135E86"
                                        paddingWidth={14}
                                        paddingHeight={7}
                                        minimumWidth={70}
                                    />
                                    <MyButton
                                        label="Agree"
                                        directory='/login'
                                        normalColor="#292F33"
                                        hoverColor="#135E86"
                                        paddingWidth={14}
                                        paddingHeight={7}
                                        minimumWidth={90}
                                    />
                                </DialogActions>
                            </Dialog>
                        </React.Fragment>

                    </div>
                </div>
            </ProfileBox>
            <div style={{ marginTop: '2%' }}>
                {showAlert && (
                    <Alert severity={showAlert.type} onClose={() => setShowAlert(false)}>
                        {showAlert.message}
                    </Alert>
                )}
            </div>
        </ProfileContainer>
    );
};

export default SettingsProfile;