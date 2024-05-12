import { useState } from 'react'
import './RegistrationForm.css'
import GenderRadio from '../../Components/MyComponents/GenderRadio';

import { FormLabel, TextField, Button, Radio, RadioGroup, FormControlLabel, InputLabel, MenuItem, FormControl, Select} from '@mui/material';

const SecondFormTeacher = () => {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        gender: '',
        email: '',
        contactNumber: '',
        password: '',
        passwordConfirmation: '',
        address: '',
        role: 0,
        pdfDoc: null
    });
    const classes = {
        field: {
            marginTop: 1,
            marginBottom: 1,
            width:'45%'
        }
    }

    const [selectedOption, setSelectedOption] = useState(0);
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
                        name="subject"
                        label="subject"
                        placeHolder="History"
                        onChange={handleChange}
                        type="text"
                        className='input-field'
                        sx={classes.field}
                    />

                </div> 

                <div className='same-line-input'>
                    <TextField
                        name="pro-bono classes"
                        label="max no. pro-bono classes"
                        placeHolder="pro-bono classes"
                        onChange={handleChange}
                        type="text"
                        className='input-field'
                        sx={classes.field}
                    />
                    <TextField
                        name="pro-bono students"
                        label="max no. pro-bono students"
                        placeHolder="pro-bono students"
                        onChange={handleChange}
                        type='text'
                        className='input-field'
                        sx={classes.field}
                    />
                </div>

                <div className='register-button-container'>
                    <Button 
                        className='register-button-style' 
                        type='submit' 
                        variant="contained" 
                        style={{minWidth : '40%' , minHeight:'50px' ,marginBottom : '20%'}}
                        onClick={()=>{
                            window.location.href = '/login';
                        }}
                    >Register </Button>
                </div>
            </form>
        </div>
    )
}

export default SecondFormTeacher
