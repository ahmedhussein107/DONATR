import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './SelectPostType.css'

export default function SelectPostType({selectedOption, onOptionSelection }) {
  

  return (
    <div className='dropdown-list-container'>
      <FormControl variant="filled" className='form' >
        <InputLabel id="demo-simple-select-filled-label" >Select donation post Type</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={selectedOption}
          onChange={(e) => {onOptionSelection(e.target.value); }}
          className='select-style'
        >
          <MenuItem value={'food'}>Food</MenuItem>
          <MenuItem value={'medicalSupplies'}>Medical supplies</MenuItem>
          <MenuItem value={'bloodDonations'}>Blood donations</MenuItem>
          <MenuItem value={'schoolSupplies'}>School supplies</MenuItem>
          <MenuItem value={'clothes'}>Clothes</MenuItem>
          <MenuItem value={'toys'}>Toys</MenuItem>


        </Select>
      </FormControl>
    </div>
  );
}