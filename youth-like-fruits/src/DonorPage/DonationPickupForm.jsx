import React, { useState } from 'react';
import { TextField, Button, FormControl, Select, MenuItem, InputLabel } from '@mui/material';

const DonationPickupForm = () => {
    const [formData, setFormData] = useState({
        transportationType: '',
        pickupTime: '',
        dropOffTime: '',
        quantity: '',
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
        console.log('Submitted Donation Pickup Form:', formData);
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <form onSubmit={handleSubmit} style={{ width: '400px' }}>
                <h2>Donation Pickup Details</h2>

                <FormControl fullWidth margin="normal">
                    <InputLabel id="transportationTypeLabel">Transportation Type</InputLabel>
                    <Select
                        labelId="transportationTypeLabel"
                        name="transportationType"
                        value={formData.transportationType}
                        onChange={handleChange}
                        variant='filled'
                        required
                    >
                        <MenuItem value="truck">Truck</MenuItem>
                        <MenuItem value="car">Car</MenuItem>
                        <MenuItem value="motorcycle">Motorcycle</MenuItem>
                    </Select>
                </FormControl>

                <TextField
                    margin="normal"
                    fullWidth
                    label="Pickup Time (HH:MM AM/PM)"
                    name="pickupTime"
                    value={formData.pickupTime}
                    onChange={handleChange}
                    required
                    variant='filled'
                />

                <TextField
                    margin="normal"
                    fullWidth
                    label="Drop-off Time (HH:MM AM/PM)"
                    name="dropOffTime"
                    value={formData.dropOffTime}
                    onChange={handleChange}
                    required
                    variant='filled'
                />

                <TextField
                    margin="normal"
                    fullWidth
                    label="Quantity"
                    name="quantity"
                    type="number"
                    value={formData.quantity}
                    onChange={handleChange}
                    required
                    variant='filled'
                />

                <div style={{ textAlign: 'center', marginTop: '20px' }}>
                    <Button type="submit" variant="contained" size="large" className='button' sx={{ minHeight: '7vh', minWidth: '20vh' }}>
                        Submit
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default DonationPickupForm;