import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const bull = (
  <Box component="span" sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }} >
    •
  </Box>
);

const card = (
  <React.Fragment>
    <CardContent sx={{ bgcolor: '#D5E0E6',  }}>
      <Typography variant="h5" component="div">
        Performance Ratio
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        Actual vs Pixravid
      </Typography>
      <Typography variant="body2">
        63.35MW 523% <br />
        63.35MW 1.32%
      </Typography>
    </CardContent>
  </React.Fragment>
);

export default function OutlinedCard() {
  return (
    <Box sx={{ minWidth: '22%' }}>
      <Card variant="outlined" sx={{boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.3)'}}>{card}</Card>
    </Box>
  );
}
