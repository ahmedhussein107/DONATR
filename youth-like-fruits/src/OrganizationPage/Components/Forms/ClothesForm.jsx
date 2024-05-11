import React, { useState, useRef } from 'react';
import { FormHelperText, TextField, Button, FormControl, Select, MenuItem, InputLabel, Tooltip } from '@mui/material';
import './ClothesForm.css'
const ClothesForm = () => {
    const [formData, setFormData] = useState({
        title: '',
        targetAmount: '',
        description: '',
        image: null  ,
        deadline: '',
        sizeRange: '',
        gender: '',
        clothingType: '',
        condition: '',
    });

    const [isHovered, setIsHovered] = useState(true);

    // Refs for tooltips
    const tooltipRefs = {
        title: useRef(null),
        targetAmount: useRef(null),
        description: useRef(null),
        image: useRef(null),
        deadline: useRef(null),
        sizeRange: useRef(null),
        gender: useRef(null),
        clothingType: useRef(null),
        condition: useRef(null),
    }

    const handleChange = (event) => {
        const { name, value, files } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: files ? files[0] : value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Submit form data to your backend logic here
        console.log('Submitted Clothes Donation Form:', formData);
    };

    // Function to handle tooltip visibility
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

            <Tooltip
                title="A clear and concise title describing the donation need. (e.g., Winter Clothes Drive for Children in Need)"
                placement="right"
            >
                <TextField
                    margin="normal"
                    fullWidth
                    label="Donation Title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                    onMouseEnter={() => handleTooltipVisibility('title', true)}
                    onMouseLeave={() => handleTooltipVisibility('title', false)}
                    inputRef={tooltipRefs.title}
                    variant='filled'
                />
            </Tooltip>

            <Tooltip
                title="A detailed description of the donation need. Explain what the donation will be used for and the impact it will create."
                placement="right"
            >
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
                    onMouseEnter={() => handleTooltipVisibility('description', true)}
                    onMouseLeave={() => handleTooltipVisibility('description', false)}
                    inputRef={tooltipRefs.description}
                    variant='filled'
                />
            </Tooltip>

            <Tooltip
                title="Upload relevant image to showcase the donation need visually. (Optional)"
                placement="right" >
                <Button variant="contained" component="label" style={{ marginRight: '10px' }}>
                    Upload Image (Optional)
                    <input accept="image/*"   type="file" hidden multiple onChange={handleChange} name="image" />
                </Button>
                {formData.image && <p id='special-p'> {formData.image.name }</p>}
            </Tooltip>

            <Tooltip
                title="If there's a specific deadline for collecting donations, include a date. (Optional)"
                placement="right">
                <TextField
                    margin="normal"
                    fullWidth
                    label={isHovered ? '' : 'Donation Deadline (Optional)'}
                    name="deadline"
                    type="date"
                    value={formData.targetAmount}
                    onChange={handleChange}
                    onMouseEnter={() => handleTooltipVisibility('deadline', true)}
                    onMouseLeave={() => handleTooltipVisibility('deadline', false)}
                    inputRef={tooltipRefs.deadline}

                />
            </Tooltip>

            <FormControl
                fullWidth margin="normal"
                onMouseEnter={() => handleTooltipVisibility('sizeRange', true)}
                onMouseLeave={() => handleTooltipVisibility('sizeRange', false)}>
                <InputLabel id="sizeRangeLabel">Size Range</InputLabel>
                <Tooltip
                    title="The range of sizes needed for the clothing donations. (e.g., infant, children's, adult)"
                    placement="right">
                    <Select
                        labelId="sizeRangeLabel"
                        name="sizeRange"
                        value={formData.sizeRange}
                        onChange={handleChange}
                        required
                        inputRef={tooltipRefs.sizeRange}
                        variant='filled'
                    >
                        <MenuItem value="">Select Size Range</MenuItem>
                        <MenuItem value="infant">Infant</MenuItem>
                        <MenuItem value="children">Children's</MenuItem>
                        <MenuItem value="adult">Adult</MenuItem>
                    </Select>
                </Tooltip>
            </FormControl>

            <FormControl
                fullWidth margin="normal"
                onMouseEnter={() => handleTooltipVisibility('gender', true)}
                onMouseLeave={() => handleTooltipVisibility('gender', false)}>
                <InputLabel id="genderLabel">Gender (Optional)</InputLabel>
                <Tooltip
                    title="Specify the gender of clothing needed, or select 'All' if applicable. (Optional)"
                    placement="right">
                    <Select
                        labelId="genderLabel"
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        inputRef={tooltipRefs.gender}
                        variant='filled'

                    >
                        <MenuItem value="">Select Gender (All)</MenuItem>
                        <MenuItem value="male">Male</MenuItem>
                        <MenuItem value="female">Female</MenuItem>
                    </Select>
                </Tooltip>
            </FormControl>


            <Tooltip
                title="Specify the types of clothing needed (e.g., coats, jackets, pants, shoes). (Required)"
                placement="right"
            >
                <TextField
                    margin="normal"
                    fullWidth
                    label="Type of Clothing"
                    name="clothingType"
                    value={formData.clothingType}
                    onChange={handleChange}
                    required
                    onMouseEnter={() => handleTooltipVisibility('clothingType', true)}
                    onMouseLeave={() => handleTooltipVisibility('clothingType', false)}
                    inputRef={tooltipRefs.clothingType}
                    variant='filled'
                />
            </Tooltip>


            <FormControl
                fullWidth margin="normal"
                onMouseEnter={() => handleTooltipVisibility('condition', true)}
                onMouseLeave={() => handleTooltipVisibility('condition', false)}>
                <InputLabel id="conditionLabel">Condition</InputLabel>
                <Tooltip
                    title="Indicate the condition of the clothing donations accepted. (Required)"
                    placement="right" >
                    <Select
                        labelId="conditionLabel"
                        name="condition"
                        value={formData.condition}
                        onChange={handleChange}
                        required
                        inputRef={tooltipRefs.condition}
                        variant='filled'
                    >
                        <MenuItem value="">Select Condition</MenuItem>
                        <MenuItem value="new">New</MenuItem>
                        <MenuItem value="gentlyUsed">Gently Used</MenuItem>
                    </Select>
                </Tooltip>

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
