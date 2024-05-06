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
    const classes = {
        field: {
            marginTop: 1,
            marginBottom: 1,
            width:'38%'
        }
    }


    function handleChange(event) {

        if (event.target.name === 'pdfDoc') {
            const file = event.target.files[0];
            if (file && file.type === 'application/pdf') {

                setFormData({ ...formData, [event.target.name]: file })
                alert('received ' + file.name)
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

                <FormLabel id="demo-radio-buttons-group-label" >Gender</FormLabel>
                <RadioGroup
                    row
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="gender"
                    onChange={handleChange}
                >
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                </RadioGroup>

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
                        name="passwordConfirmation"
                        label="Password confirmation"
                        placeHolder="********"
                        onChange={handleChange}
                        type="password"
                        className='input-field'
                        sx={classes.field}
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
                    />
                    <TextField
                        name="organizationType"
                        label="Organization type"
                        placeHolder="Orphanage"
                        onChange={handleChange}
                        type="text"
                        className='input-field'
                        sx={classes.field}
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
                    />

                 {/* <label>These are files that prove your affiliation with the organization(only pdf)</label> */}
                    <Button
                        variant="contained"
                        component="label"
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
                    {/* <PdfFileInput selectedFile={formData.pdfDoc} handleFileChange={handleChange} /> */}
                </div>

                <div className='register-button-container'>
                    <Button  className='register-button-style' type='submit' variant="contained">Register</Button>
                </div>




                {/* <button type='submit'>Register</button> */}
            </form>
        </div>




    )
}

export default RegistrationForm