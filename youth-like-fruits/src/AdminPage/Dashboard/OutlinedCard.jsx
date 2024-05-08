import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


export default function OutlinedCard(props) {
  const text1 = props.text1
  const text2 = props.text2
  const text3 = props.text3
  return (
    <Box sx={{ minWidth: '20%' }}>
      <Card variant="outlined" sx={{boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.3)'}}>
        <React.Fragment>
          <CardContent sx={{ bgcolor: '#FFFFFF',  }}>
            <Typography variant="h5" component="div" style={{
              fontSize: '18px',
              fontFamily: 'Josefin Sans',
              fontWeight: '400',
              color: '#2F3F4F',
            }}>
              {text1}
            </Typography>
            <Typography style={{
              fontSize: '18px',
              fontFamily: 'Josefin Sans',
              fontWeight: '400',
              color: '#2F3F4F',
            }} >
              {text2}
            </Typography>
            <Typography variant="body2" style={{
              fontSize: '20px',
              fontFamily: 'Josefin Sans',
              fontWeight: '700',
              color: '#292F33',
            }}>
              {text3}
            </Typography>
          </CardContent>
        </React.Fragment>
      </Card>
    </Box>
  );
}
