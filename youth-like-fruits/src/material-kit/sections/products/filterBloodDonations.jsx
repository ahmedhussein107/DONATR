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
import { Select , MenuItem , TextField } from '@mui/material';

import Iconify from '../.././components/iconify';
import Scrollbar from '../.././components/scrollbar';
import { ColorPicker } from '../.././components/color-utils';
import { useState } from 'react';

export default function FilterBloodDonations({ openFilter, onOpenFilter, onCloseFilter, set }) {

    const [hospitalName , setHospitalName] = useState('none');
    const [governorate , setGovernorate] = useState('none');
    const [area , setArea] = useState('none');

    const apply = () => {
        set({
            hospitalName: hospitalName === 'none' ? null : hospitalName,
            governorate: governorate === 'none' ? null : governorate,
            area: area === 'none' ? null : area,
        });
    }

    const handleHospitalNameChange = (e) => {
        setHospitalName(e.target.value);
    }

    const handleGovenorateChange = (e) => {
        setGovernorate(e.target.value);
        console.log(e.target.value);
    }

    const handleAreaChange = (e) => {
        setArea(e.target.value);
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
                // select hospitalName
                <TextField 
                id="filled-basic" 
                label="hospital" 
                variant="filled" 
                onChange={handleHospitalNameChange} />
            }
            {
                // select type
                <TextField 
                id="filled-basic" 
                label="governorate" 
                variant="filled" 
                onChange={handleGovenorateChange} />
            }
            {
                // select type
              <TextField 
                id="filled-basic" 
                label="area" 
                variant="filled" 
                onChange={handleAreaChange} />
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

FilterBloodDonations.propTypes = {
  openFilter: PropTypes.bool,
  onOpenFilter: PropTypes.func,
  onCloseFilter: PropTypes.func,
};
