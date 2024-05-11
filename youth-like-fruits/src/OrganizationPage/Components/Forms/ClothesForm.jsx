import React, { useState, useRef } from 'react';
import { FormHelperText, TextField, Button, FormControl, Select, MenuItem, InputLabel, Tooltip } from '@mui/material';
import './ClothesForm.css'
const ClothesForm = () => {
    const [formData, setFormData] = useState({
        title: '',
        targetAmount: '',
        description: '',
        images: [],
        deadline: '',
        sizeRange: '',
        gender: '',
        clothingType: '',
        condition: '',
    });

    const [isHovered, setIsHovered] = useState(false);

    // Refs for tooltips
    const tooltipRefs = {
        title: useRef(null),
        targetAmount: useRef(null),
        description: useRef(null),
        images: useRef(null),
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
            <h2>Clothes Donation Form</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                <Tooltip
                    title="A clear and concise title describing the donation need. (e.g., Winter Clothes Drive for Children in Need)"
                    placement="top"
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
                    />
                </Tooltip>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                <Tooltip
                    title="A detailed description of the donation need. Explain what the donation will be used for and the impact it will create."
                    placement="top"
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

                    />
                </Tooltip>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                <Tooltip
                    title="Upload relevant images to showcase the donation need visually. (Optional)"
                    placement="top" >
                    <Button variant="contained" component="label" style={{ marginRight: '10px' }}>
                        Upload Images (Optional)
                        <input type="file" hidden multiple onChange={handleChange} name="images" />
                    </Button>
                </Tooltip>

                <Tooltip
                    title="If there's a specific deadline for collecting donations, include a date. (Optional)"
                    placement="top">
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
            </div>
            <FormControl
                fullWidth margin="normal"
                onMouseEnter={() => handleTooltipVisibility('sizeRange', true)}
                onMouseLeave={() => handleTooltipVisibility('sizeRange', false)}>
                <InputLabel id="sizeRangeLabel">Size Range</InputLabel>
                <Tooltip
                    title="The range of sizes needed for the clothing donations. (e.g., infant, children's, adult)"
                    placement="top">
                    <Select
                        labelId="sizeRangeLabel"
                        name="sizeRange"
                        value={formData.sizeRange}
                        onChange={handleChange}
                        required
                        inputRef={tooltipRefs.sizeRange}

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
                    placement="top">
                    <Select
                        labelId="genderLabel"
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        inputRef={tooltipRefs.gender}

                    >
                        <MenuItem value="">Select Gender (All)</MenuItem>
                        <MenuItem value="male">Male</MenuItem>
                        <MenuItem value="female">Female</MenuItem>
                    </Select>
                </Tooltip>
            </FormControl>


            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                <Tooltip
                    title="Specify the types of clothing needed (e.g., coats, jackets, pants, shoes). (Required)"
                    placement="top"
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
                    />
                </Tooltip>
            </div>



            <FormControl
                fullWidth margin="normal"
                onMouseEnter={() => handleTooltipVisibility('condition', true)}
                onMouseLeave={() => handleTooltipVisibility('condition', false)}>
                <InputLabel id="conditionLabel">Condition</InputLabel>
                <Tooltip
                    title="Indicate the condition of the clothing donations accepted. (Required)"
                    placement="top" >
                    <Select
                        labelId="conditionLabel"
                        name="condition"
                        value={formData.condition}
                        onChange={handleChange}
                        required
                        inputRef={tooltipRefs.condition}
                    >
                        <MenuItem value="">Select Condition</MenuItem>
                        <MenuItem value="new">New</MenuItem>
                        <MenuItem value="gentlyUsed">Gently Used</MenuItem>
                    </Select>
                </Tooltip>

            </FormControl>



            <div className="button-container">
                <Button type="submit" variant="contained">
                    Submit Donation Post
                </Button>
            </div>

        </form>
    );
};

export default ClothesForm;
