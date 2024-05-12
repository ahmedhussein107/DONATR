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

export default function FilterMedicalSupplies({ openFilter, onOpenFilter, onCloseFilter, set }) {

    const [subtype , setSubtype] = useState('none');
    const [medicalUse , setmedicalUse] = useState('none');
    const [visible , setVisible] = useState(false);

    const apply = () => {
        set({
            subtype: subtype === 'none' ? null : subtype,
            medicalUse: medicalUse === 'none' ? null : medicalUse,
        });
    }

    const handleTypeChange = (e) => {
        setSubtype(e.target.value);
        setVisible(e.target.value === 'Medication');
    }

    const handleMedicalUseChange = (e) => {
        setmedicalUse(e.target.value);
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
                // select type
                <Select
                value={subtype}
                onChange={handleTypeChange}
                variant="outlined"
                sx={{color: '#fff'}}
              >
                <MenuItem value='none'>All</MenuItem>
                <MenuItem value='Medical Devices'>{`Medical Devices`}</MenuItem>
                <MenuItem value='Medication'>{`Medication`}</MenuItem>
                <MenuItem value='Medical Equipment'>{`Medical Equipment`}</MenuItem>
              </Select>
            }
            {
                visible && <Select
                value={medicalUse}
                onChange={handleMedicalUseChange}
                variant="outlined"
                sx={{color: '#fff'}}
              >
                <MenuItem value='none'>All</MenuItem>
                <MenuItem value='Anti Biotic'>{`Anti Biotic`}</MenuItem>
                <MenuItem value='Flu'>{`Flu`}</MenuItem>
                <MenuItem value='Bacterial Infection'>{`Bacterial Infection`}</MenuItem>
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

FilterMedicalSupplies.propTypes = {
  openFilter: PropTypes.bool,
  onOpenFilter: PropTypes.func,
  onCloseFilter: PropTypes.func,
};
