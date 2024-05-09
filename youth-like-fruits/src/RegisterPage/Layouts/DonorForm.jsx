import { useState } from 'react'
import './RegistrationForm.css'
import GenderRadio from '../../Components/MyComponents/GenderRadio';

import { FormLabel, TextField, Button, Radio, RadioGroup, FormControlLabel, InputLabel, MenuItem, FormControl, Select} from '@mui/material';

const DonorForm = () => {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        gender: '',
        email: '',
        contactNumber: '',
        password: '',
        passwordConfirmation: '',
        address: '',
        role: '0',
        pdfDoc: null
    });
    const classes = {
        field: {
            marginTop: 1,
            marginBottom: 1,
            width:'38%'
        }
    }

    const [selectedOption, setSelectedOption] = useState('');
    const [uploadedFileName, setUploadedFileName] = useState('');

    const handleOptionClick = (event) => {
        setSelectedOption(event.target.value);
        setFormData({ ...formData, role: event.target.value });
    };

    function handleChange(event) {

        if (event.target.name === 'pdfDoc') {
            const file = event.target.files[0];
            if (file && file.type === 'application/pdf') {

                setFormData({ ...formData, [event.target.name]: file });
                setUploadedFileName(file.name); // Set the uploaded file name
            } else {

                alert('Please select a valid PDF file.');
            }
        } else {
            setFormData({ ...formData, [event.target.name]: event.target.value })
        }

    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(formData);
    }

    return (

        <div className='form-container' >
            <form onSubmit={handleSubmit}  >

                <div className='same-line-input'>
                    <TextField
                        name='firstName'
                        label='First Name'
                        placeholder='Mohamed'
                        onChange={handleChange}
                        sx={classes.field}
                    />
                    <TextField
                        name='lastName'
                        label='Last name'
                        placeholder='Ahmed'
                        onChange={handleChange}
                        type='text'
                        className='input-field'
                        sx={classes.field}
                    />
                </div>

                <GenderRadio onOptionSelection={handleChange} selectedOption={formData.gender} />

               
                <div className='same-line-input'>
                    <TextField
                        name="email"
                        label="Email"
                        placeHolder="mohamed24@gmail.com"
                        onChange={handleChange}
                        type="email"
                        className='input-field'
                        sx={classes.field}
                    />
                    <TextField
                        name="contactNumber"
                        label="Contact number"
                        placeHolder="+20"
                        onChange={handleChange}
                        type='text'
                        className='input-field'
                        sx={classes.field}
                    />
                </div>


                <div className='same-line-input'>
                    <TextField
                        name="password"
                        label="Password"
                        placeHolder="********"
                        onChange={handleChange}
                        type="password"
                        className='input-field'
                        sx={classes.field}
                    />
                    <TextField
                        name="address"
                        label="Address"
                        placeHolder="Cairo, 1st stellment, Talat Harb street"
                        onChange={handleChange}
                        type="text"
                        className='input-field'
                        sx={classes.field}
                    />

                </div>

                <div className='same-line-input'>

                    <TextField
                        name="passwordConfirmation"
                        label="Password confirmation"
                        placeHolder="********"
                        onChange={handleChange}
                        type="password"
                        className='input-field'
                        sx={classes.field}
                    />
                   <div>
                        <FormControl variant="filled" sx={{ minWidth: '15vw' }}>
                            <InputLabel>Volunteer Role</InputLabel>
                            <Select value={formData.role} onChange={handleOptionClick}>    
                                <MenuItem value={1}>Teacher</MenuItem>
                                <MenuItem value={2}>Doctor</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    
                </div>  

                {selectedOption && (
                    <div className='same-line-input' style={{right: '5%', position: 'absolute', display: 'flex', flexDirection: 'column'}}>   
                        <Button
                            variant="contained"
                            component="label"
                            hidden={!selectedOption}
                        >
                            Upload Verification Document
                            <input
                                name="pdfDoc"
                                type="file"
                                hidden
                                accept=".pdf"
                                onChange={handleChange}
                            />
                        </Button>
                        {uploadedFileName && <p style={{color: 'black'}}>{uploadedFileName}</p>} {/* Display the uploaded file name */}
                    </div>
                )}

                <div className='register-button-container'>
                    <Button  className='register-button-style' type='submit' variant="contained">Register</Button>
                </div>
            </form>
        </div>
    )
}

export default DonorForm
