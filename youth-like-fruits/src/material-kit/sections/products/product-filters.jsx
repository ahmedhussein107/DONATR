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

import Iconify from '../.././components/iconify';
import Scrollbar from '../.././components/scrollbar';
import { ColorPicker } from '../.././components/color-utils';
import { useState } from 'react';

// ----------------------------------------------------------------------

export const CLOTHES_OPTIONS = ['Age' , 'Gender' , 'Season'];
export const SCHOOL_OPTIONS = ['Stationary' , 'Book']
export const TOY_OPTIONS = ['Age' , 'Gender' , 'Type'];
export const FOOD_OPTIONS = ['Type'];
export const SEASONS = ['Winter' , 'Fall' , 'Spring' , 'Summer']
export const TOYS_TYPES = ['board games', 'stuffed toys', 'dolls', 'sports', 'cars', 'outdoor']
export const FOOD_TYPES = [ 'fruits' , 'vegetables', 'canned foods', 'fresh meals', 'baked goods' ]

// ----------------------------------------------------------------------

export default function ProductFilters({ openFilter, onOpenFilter , onCloseFilter , type , set}) {
  const [currentFilter , setCurrentFilter] = useState(
    {
      minAge: 0,
      maxAge: 100,
      gender: '',
      season: '',
      type: '',
      subtype: '',
      hospitalName: '',
      governorate: '',
      area: '',
    }
  ); 

  const [currentCategory, setCurrentCategory] = useState(null);
  
  const firstLevelFilter = (
    <Stack spacing={1}>
      <Typography variant="subtitle2">{type}</Typography>
      <FormGroup>
        {
          type === 'Clothes' && 
          <Select
            value={sorting}
            onChange={handleSortingChange}
            variant="outlined"
          >
            <MenuItem value="newest">Newest</MenuItem>
            <MenuItem value="oldest">Oldest</MenuItem>
            <MenuItem value="lexicalAscending">Lexicographical Ascending</MenuItem>
            <MenuItem value="lexicalDescending">Lexicographical Descending</MenuItem>
          </Select>
        }
      </FormGroup>
    </Stack>
  );

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
          sx: { width: 280,
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
            {firstLevelFilter}
          </Stack>
        </Scrollbar>
      </Drawer>
    </ div>
  );
}

ProductFilters.propTypes = {
  openFilter: PropTypes.bool,
  onOpenFilter: PropTypes.func,
  onCloseFilter: PropTypes.func,
};
