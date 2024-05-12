import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { TextField } from '@mui/material';

import Iconify from '../../../components/iconify/iconify';
import Scrollbar from '../../../components/scrollbar';  
import { useState } from 'react';

export default function FilterTeachingCases({ openFilter, onOpenFilter, onCloseFilter, set }) {

    const [subject , setSubject] = useState('none');
    const [governorate , setGovernorate] = useState('none');
    const [area , setArea] = useState('none');

    const apply = () => {
        set({
            subject: subject === 'none' ? null : subject,
            governorate: governorate === 'none' ? null : governorate,
            area: area === 'none' ? null : area,
        });
    }

    const handleSubjectChange = (e) => {
        setSubject(e.target.value);
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
                label="Subject" 
                variant="filled" 
                onChange={handleSubjectChange} />
            }
            {
                // select type
                <TextField 
                id="filled-basic" 
                label="Governorate" 
                variant="filled" 
                onChange={handleGovenorateChange} />
            }
            {
                // select type
              <TextField 
                id="filled-basic" 
                label="Area" 
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

FilterTeachingCases.propTypes = {
  openFilter: PropTypes.bool,
  onOpenFilter: PropTypes.func,
  onCloseFilter: PropTypes.func,
};
