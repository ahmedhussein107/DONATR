import React, { useRef, useState } from 'react';
import { FormHelperText, TextField, Button, FormControl, Select, MenuItem, InputLabel, Tooltip } from '@mui/material';
import './ClothesForm.css';

const ClothesForm = () => {
    const [formData, setFormData] = useState({
        title: '',
        targetAmount: '',
        description: '',
        image: null,
        deadline: '',
        sizeRange: '',
        gender: '',
        clothingType: '',
        condition: '',
    });

    const [isHovered, setIsHovered] = useState(false);

    const tooltipRefs = {
        sizeRange: useRef(null),
        gender: useRef(null),
        clothingType: useRef(null),
        condition: useRef(null),
    };

    const handleChange = (event) => {
        const { name, value, files } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: files ? files[0] : value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Submitted Clothes Donation Form:', formData);
    };

    const handleTooltipVisibility = (refName, visibility) => {
        if (tooltipRefs[refName].current) {
            tooltipRefs[refName].current.style.visibility = visibility ? 'visible' : 'hidden';
        }
        if (refName === 'deadline') {
            setIsHovered(visibility);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Clothes Donation Post Details</h2>

            <TextField
                margin="normal"
                fullWidth
                label="Donation Title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                variant='filled'
            />

            <TextField
                margin="normal"
                fullWidth
                label="Description"
                multiline
                rows={4}
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                variant='filled'
            />

            <Button variant="contained" component="label" style={{ marginRight: '10px' }}>
                Upload Image (Optional)
                <input accept="image/*" type="file" hidden multiple onChange={handleChange} name="image" />
            </Button>
            {formData.image && <p id='special-p'> {formData.image.name}</p>}

            <TextField
                margin="normal"
                fullWidth
                label={''}
                name="deadline"
                value={formData.deadline}
                type="date"
                onChange={handleChange}
                variant='filled'
            />
            <TextField
                margin="normal"
                fullWidth
                label="Schedule time for Donation Drop-off"
                name="timeSlot"
                onChange={handleChange}
                required
                variant="filled"
            />
            <FormControl
                fullWidth margin="normal"
            >
                <InputLabel id="sizeRangeLabel">Size Range</InputLabel>
                <Select
                    labelId="sizeRangeLabel"
                    name="sizeRange"
                    value={formData.sizeRange}
                    onChange={handleChange}
                    required
                    variant='filled'
                >
                    <MenuItem value="">Select Size Range</MenuItem>
                    <MenuItem value="infant">Infant</MenuItem>
                    <MenuItem value="children">Children's</MenuItem>
                    <MenuItem value="adult">Adult</MenuItem>
                </Select>
            </FormControl>

            <FormControl
                fullWidth margin="normal"
            >
                <InputLabel id="genderLabel">Gender (Optional)</InputLabel>
                <Select
                    labelId="genderLabel"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    variant='filled'
                >
                    <MenuItem value="">Select Gender (All)</MenuItem>
                    <MenuItem value="male">Male</MenuItem>
                    <MenuItem value="female">Female</MenuItem>
                </Select>
            </FormControl>

            <TextField
                margin="normal"
                fullWidth
                label="Type of Clothing"
                name="clothingType"
                value={formData.clothingType}
                onChange={handleChange}
                required
                variant='filled'
            />

            <FormControl
                fullWidth margin="normal"
            >
                <InputLabel id="conditionLabel">Condition</InputLabel>
                <Select
                    labelId="conditionLabel"
                    name="condition"
                    value={formData.condition}
                    onChange={handleChange}
                    required
                    variant='filled'
                >
                    <MenuItem value="">Select Condition</MenuItem>
                    <MenuItem value="new">New</MenuItem>
                    <MenuItem value="gentlyUsed">Gently Used</MenuItem>
                </Select>
            </FormControl>

            <div className="button-container">
                <Button type="submit" variant="contained" className='button'>
                    Submit Donation Post
                </Button>
            </div>
        </form>
    );
};

export default ClothesForm;