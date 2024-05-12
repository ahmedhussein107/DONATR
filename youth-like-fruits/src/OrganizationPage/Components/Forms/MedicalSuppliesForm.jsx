import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

const MedicalSuppliesForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: null,
    deadline: '',
    medicalSupplies: '',
    quantityNeeded: '',
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
    console.log('Submitted Medical Supplies Donation Form:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Medical Supplies Donation Post Details</h2>

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
        label="Medical Supplies Needed"
        name="medicalSupplies"
        value={formData.medicalSupplies}
        onChange={handleChange}
        variant='filled'
      />

      <TextField
        margin="normal"
        fullWidth
        label="Quantity Needed"
        name="quantityNeeded"
        value={formData.quantityNeeded}
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

export default MedicalSuppliesForm;