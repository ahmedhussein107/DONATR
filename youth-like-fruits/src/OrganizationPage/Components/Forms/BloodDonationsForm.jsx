import React, { useState } from 'react';
import { TextField, Button, Select, MenuItem, FormControl, InputLabel } from '@mui/material';

const BloodDonationsForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: null,
    deadline: '',
    bloodType: '',
    donationDriveLocation: '',
    targetAmount: '',
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
    console.log('Submitted Blood Donations Form:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Blood Donations Post Details</h2>

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

      <FormControl fullWidth margin="normal">
        <InputLabel id="bloodTypeLabel">Blood Type</InputLabel>
        <Select
          labelId="bloodTypeLabel"
          name="bloodType"
          value={formData.bloodType}
          onChange={handleChange}
          variant='filled'
        >
          <MenuItem value="A">Blood Type A</MenuItem>
          <MenuItem value="B">Blood Type B</MenuItem>
          <MenuItem value="AB">Blood Type AB</MenuItem>
          <MenuItem value="O">Blood Type O</MenuItem>
        </Select>
      </FormControl>

      <TextField
        margin="normal"
        fullWidth
        label="Donation Drive Location (Optional)"
        name="donationDriveLocation"
        value={formData.donationDriveLocation}
        onChange={handleChange}
        variant='filled'
      />

      <TextField
        margin="normal"
        fullWidth
        label="Target Donation Amount"
        name="targetAmount"
        value={formData.targetAmount}
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

export default BloodDonationsForm;