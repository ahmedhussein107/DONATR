import React, { useRef, useState } from 'react';
import { TextField, Button, FormControl, Select, MenuItem, InputLabel } from '@mui/material';
import './FoodForm.css';

const FoodForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: null,
    deadline: '',
    foodItems: '',
    dietaryRestrictions: '',
    quantityNeeded: '',
  });

  const handleChange = (event) => {
    const { name, value, files } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitted Food Donation Form:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Food Donation Post Details</h2>

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
        label=""
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
      <TextField
        margin="normal"
        fullWidth
        label="Food Items Needed"
        name="foodItems"
        value={formData.foodItems}
        onChange={handleChange}
        variant='filled'
      />

      <FormControl
        fullWidth margin="normal"
      >
        <InputLabel id="dietaryRestrictionsLabel">Dietary Restrictions</InputLabel>
        <Select
          labelId="dietaryRestrictionsLabel"
          name="dietaryRestrictions"
          value={formData.dietaryRestrictions}
          onChange={handleChange}
          variant='filled'
        >
          <MenuItem value="">No Dietary Restrictions</MenuItem>
          <MenuItem value="glutenFree">Gluten-free</MenuItem>
          <MenuItem value="nutFree">Nut-free</MenuItem>
          <MenuItem value="dairyFree">Dairy-free</MenuItem>
          {/* Add more dietary restrictions as needed */}
        </Select>
      </FormControl>

      <TextField
        margin="normal"
        fullWidth
        label="Quantity Needed"
        name="quantityNeeded"
        value={formData.quantityNeeded}
        onChange={handleChange}
        variant='filled'
      />

      <div className="button-container">
        <Button type="submit" variant="contained" className='button'>
          Submit Donation Post
        </Button>
      </div>
    </form>
  );
};

export default FoodForm;
