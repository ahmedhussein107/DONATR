import { useState } from 'react'
import './RegistrationForm.css'

import { FormLabel, TextField, Button, Radio, RadioGroup, FormControlLabel } from '@mui/material';


// const useStyles = makeStyles({
//     field:{
//         marginTop:200,
//         marginBottom:20
//     }
// })






const RegistrationForm = () => {
    // const classes = useStyles();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        gender: '',
        email: '',
        contactNumber: '',
        password: '',
        passwordConfirmation: '',
        organizationName: '',
        organizationType: '',
        address: '',
        pdfDoc: null
    });
    const [uploadedFileName, setUploadedFileName] = useState('');
    const classes = {
        field: {
            marginTop: 1,
            marginBottom: 1,
            width: '40%'
        }
    }



    function handleChange(event) {

        if (event.target.name === 'pdfDoc') {
            const file = event.target.files[0];
            if (file && file.type === 'application/pdf') {

                setFormData({ ...formData, [event.target.name]: file });
                setUploadedFileName(file.name)
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
    const GenderRadio = ({ selectedOption, onOptionSelection }) => {


        return (
            <div>
                <label htmlFor="gender" className='gender-label'>Gender</label>
                <div onChange={onOptionSelection} className='checkbox-input-container'>
                    <div className="option">
                        <input type="radio" id="male" value="male" name="gender" checked={selectedOption === "male"} />
                        <label htmlFor="male">Male</label>
                    </div>
                    <div className="option">
                        <input type="radio" id="female" value="female" name="gender" checked={selectedOption === "female"} />
                        <label htmlFor="female">Female</label>
                    </div>

                </div>
            </div>
        );
    };

    
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
                        required
                    />
                    <TextField
                        name='lastName'
                        label='Last name'
                        placeholder='Ahmed'
                        onChange={handleChange}
                        type='text'
                        className='input-field'
                        sx={classes.field}
                        required
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
                        required
                    />
                    <TextField
                        name="contactNumber"
                        label="Contact number"
                        placeHolder="+20"
                        onChange={handleChange}
                        type='text'
                        className='input-field'
                        sx={classes.field}
                        required
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
                        required
                    />
                    <TextField
                        name="passwordConfirmation"
                        label="Password confirmation"
                        placeHolder="********"
                        onChange={handleChange}
                        type="password"
                        className='input-field'
                        sx={classes.field}
                        required
                    />

                </div>
                <div className='same-line-input'>
                    <TextField
                        name="organizationName"
                        label="Organization name"
                        placeHolder="Resala"
                        onChange={handleChange}
                        type="text"
                        className='input-field'
                        sx={classes.field}
                        required
                    />
                    <TextField
                        name="organizationType"
                        label="Organization type"
                        placeHolder="Orphanage"
                        onChange={handleChange}
                        type="text"
                        className='input-field'
                        sx={classes.field}
                        required
                    />
                </div>

                <div className='same-line-input'>
                    <TextField
                        name="address"
                        label="Organization address"
                        placeHolder="Cairo, 1st stellment, Talat Harb street"
                        onChange={handleChange}
                        type="text"
                        className='input-field'
                        sx={classes.field}
                        required
                    />

                    <div className="upload-file-container">

                        <Button
                            variant="contained"
                            component="label"
                        >
                            Upload Verification Documents
                            <input
                                name="pdfDoc"
                                type="file"
                                hidden
                                accept=".pdf"
                                onChange={handleChange}
                                required
                            />
                        </Button>
                        <p className='upload-file-label' >pdf file proving your affiliation with the organization: {uploadedFileName} </p>

                    </div>

                </div>

                <div className='register-button-container'>
                    <Button className='register-button-style' type='submit' variant="contained">Register</Button>
                </div>

            </form>
        </div>




    )
}

export default RegistrationForm