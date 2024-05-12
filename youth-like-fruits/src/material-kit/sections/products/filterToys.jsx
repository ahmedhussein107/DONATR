import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Radio from '@mui/material/Radio';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import Rating from '@mui/material/Rating';
import Divider from '@mui/material/Divider';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import RadioGroup from '@mui/material/RadioGroup';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Select , MenuItem } from '@mui/material';

import Iconify from '../.././components/iconify';
import Scrollbar from '../.././components/scrollbar';
import { ColorPicker } from '../.././components/color-utils';
import { useState } from 'react';

export default function FilterToys({ openFilter, onOpenFilter, onCloseFilter, set }) {

    const [ageRange , setAgeRange] = useState({
        minAge: null,
        maxAge: null,
    });

    const [curentAge , setCurrentAge] = useState('1 100');
    const [gender , setGender] = useState('none');
    const [subtype , setSubtype] = useState('none');

    const apply = () => {
        set({
            minAge: ageRange.minAge,
            maxAge: ageRange.maxAge,
            gender: gender === 'none' ? null : gender,
            subtype: subtype === 'none' ? null : subtype,
        });
    }

    const handleAgeChange = (e) => {
        setCurrentAge(e.target.value);
        let [minAge , maxAge] = e.target.value.split(' ').map(s => Number(s));
        console.log(`min is ${minAge} and max is ${maxAge}`);
        setAgeRange({
            minAge: minAge,
            maxAge: maxAge,
        })
    }

    const handleGenderChange = (e) => {
        console.log(`gender is ${e.target.value}`);
        setGender(e.target.value);
    }

    const handleCategoryChange = (e) => {
        console.log(`season is ${e.target.value}`);
        setSubtype(e.target.value);
    }

  return (
    <div>
      <Button
        disableRipple
        color="inherit"
        endIcon={<Iconify icon="ic:round-filter-list"/>}
        onClick={onOpenFilter}
        sx={{color: '#1976d2'}}
      >
        Filters&nbsp;
      </Button>

      <Drawer
        anchor="right"
        open={openFilter}
        onClose={onCloseFilter}
        PaperProps={{
          sx: { 
            width: 280, 
            border: 'none', 
            overflow: 'hidden', 
            background: `linear-gradient(to bottom, #3C4F59, #426D84)`,
            color: '#fff'
        },
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ px: 1, py: 2 }}
        >
          <Typography variant="h6" sx={{ ml: 1 }}>
            Filters
          </Typography>
          <IconButton onClick={onCloseFilter}>
            <Iconify icon="eva:close-fill" />
          </IconButton>
        </Stack>

        <Divider />

        <Scrollbar>
          <Stack spacing={3} sx={{ p: 3 }}>
            {
                // select age
                <Select
                value={curentAge}
                onChange={handleAgeChange}
                variant="outlined"
                sx={{color: '#fff'}}
              >
                <MenuItem value='1 100'>All</MenuItem>
                <MenuItem value='1 5'>{`1 - 5 years`}</MenuItem>
                <MenuItem value='6 10'>{`6 - 10 years`}</MenuItem>
                <MenuItem value='11 15'>{`11 - 15 years`}</MenuItem>
              </Select>
            }
            {
                // select gender
                <Select
                value={gender}
                onChange={handleGenderChange}
                variant="outlined"
                sx={{color: '#fff'}}
              >
                <MenuItem value='none'>All Genders</MenuItem>
                <MenuItem value='Male'>Male</MenuItem>
                <MenuItem value="Female">Female</MenuItem>    
              </Select>
            }
            {
                // select season
                <Select
                value={subtype}
                onChange={handleCategoryChange}
                variant="outlined"
                sx={{color: '#fff'}}
              >
                <MenuItem value="none">All Categories</MenuItem>
                <MenuItem value="board games">Board Games</MenuItem>
                <MenuItem value="stuffed toys">Stuffed Toys</MenuItem>
                <MenuItem value="dolls">Dolls</MenuItem>
                <MenuItem value="sports">Sports</MenuItem>
                <MenuItem value="cars">Cars</MenuItem>
                <MenuItem value="outdoor">Outdoor</MenuItem>

              </Select>
            }
          </Stack>
        </Scrollbar>
        <Box sx={{ p: 3 }}>
          <Button
            fullWidth
            size="large"
            type="submit"
            color="inherit"
            variant="outlined"
            startIcon={<Iconify icon="ic:round-clear-all" />}
            onClick={apply}
          >
            Apply
          </Button>
        </Box>
      </Drawer>
    </ div>
  );
}

FilterToys.propTypes = {
  openFilter: PropTypes.bool,
  onOpenFilter: PropTypes.func,
  onCloseFilter: PropTypes.func,
};
