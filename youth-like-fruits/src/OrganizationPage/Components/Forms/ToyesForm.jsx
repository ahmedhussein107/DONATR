import React, { useRef, useState } from 'react'
import { FormHelperText, TextField, Button, FormControl, Select, MenuItem, InputLabel, Tooltip } from '@mui/material';
import './ClothesForm.css'
const ToyesForm = ({onSubmit}) => {
  const [formData, setFormData] = useState({
    title: '',
    targetAmount: '',
    description: '',
    image: null,
    deadline: '',
    typeOfToys: '',
    ageGroup: '',
    condition: '',
  });

  const [isHovered, setIsHovered] = useState(false)

  // Refs for tooltips
  const tooltipRefs = {
    title: useRef(null),
    targetAmount: useRef(null),
    description: useRef(null),
    image: useRef(null),
    deadline: useRef(null),
    typeOfToys: useRef(null),
    ageGroup: useRef(null),
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
    onSubmit();
    // Submit form data to your backend logic here
    console.log('Submitted Toys Donation Form:', formData);
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
      <h2>Toys Donation Post Details</h2>

      <Tooltip
        title="A clear and concise title describing the donation need.(required)"
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
          inputRef={tooltipRefs.title}
          variant='filled'

        />
      </Tooltip>

      <Tooltip
        title="A detailed description of the donation need. Explain what the donation will be used for and the impact it will create.(required)"
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
          inputRef={tooltipRefs.description}
          variant='filled'
          sx={{ visibility: 'visible' }}
        />
      </Tooltip>

      <Tooltip
        title="Provide the number of units you need from toys.(required)"
        placement="right"
      >
        <TextField
          margin="normal"
          fullWidth
          label="Target Amount"
          rows={4}
          name="targetAmount"
          value={formData.targetAmount}
          onChange={handleChange}
          required
          inputRef={tooltipRefs.targetAmount}
          variant='filled'
          type='number'
        />
      </Tooltip>

      <Tooltip
        title="Upload relevant image to showcase the donation need visually. (Optional)"
        placement="right" >
        <Button variant="contained" component="label" style={{ marginRight: '10px' }}>
          Upload Image (Optional)
          <input accept="image/*" type="file" hidden multiple onChange={handleChange} name="image" />
        </Button>
        {formData.image && <p id='special-p'> {formData.image.name}</p>}
      </Tooltip>


      <Tooltip
        title="If there's a specific deadline for collecting donations, include a date. (Optional)"
        placement="right">
        <TextField
          margin="normal"
          fullWidth
          label={isHovered ? '' : 'Donation Deadline '}
          name="deadline"
          value={formData.deadline}
          type="date"
          onChange={handleChange}
          inputRef={tooltipRefs.deadline}
          variant='filled'

        />
      </Tooltip>



      <FormControl
        fullWidth margin="normal"
      >
        <InputLabel id="typeOfToysLabel">Type of Toys</InputLabel>
        <Tooltip
          title="The type of the needed toys (required)"
          placement="right">
          <Select
            labelId="typeOfToysLabel"
            name="typeOfToys"
            value={formData.typeOfToys}
            onChange={handleChange}
            required
            inputRef={tooltipRefs.typeOfToys}
            variant='filled'
          >
            <MenuItem value="">educational</MenuItem>
            <MenuItem value="infant">active play</MenuItem>
            <MenuItem value="children">creative</MenuItem>
            <MenuItem value="other">other</MenuItem>
          </Select>
        </Tooltip>
      </FormControl>

      <FormControl
        fullWidth margin="normal"
      >
        <InputLabel id="ageGroupLabel">Age Group</InputLabel>
        <Tooltip
          title="Specify the Age group for which the toys are needed. (Optional)"
          placement="right">
          <Select
            labelId="ageGroupLabel"
            name="ageGroup"
            value={formData.ageGroup}
            onChange={handleChange}
            inputRef={tooltipRefs.ageGroup}
            variant='filled'
          >
            <MenuItem value="">Select Gender (All)</MenuItem>
            <MenuItem value="newborn">Newborn (3–12 months)</MenuItem>
            <MenuItem value="toddler"> Toddler (1–5 years)</MenuItem>
            <MenuItem value="kids">Kids (5–13 years)</MenuItem>
            <MenuItem value="adults">Adult (Typically teens or older)</MenuItem>
          </Select>
        </Tooltip>
      </FormControl>

      <FormControl
        fullWidth margin="normal"
      >
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

    </form >
  );
}

export default ToyesForm