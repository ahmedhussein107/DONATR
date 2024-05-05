import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

export default function ElevateAppBarLogin(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar style={{ backgroundColor: '#292F33' }}>
          <Toolbar>
            <Typography variant="h6" component="div" sx=
            {{  flexGrow: 0 ,
                fontFamily: 'sans-serif' , 
                fontWeight: 'bold'
             }}>
              DONATR
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: 'flex', justifyContent: 'center'}}>
              <Button color="inherit" sx={{ fontSize: '18px' , fontFamily: 'Roboto' , marginLeft: '10px' }}> Home</Button>
              <Button color="inherit" sx={{ fontSize: '18px' , fontFamily: 'Roboto' , marginLeft: '10px' }}>About</Button>
              <Button color="inherit" sx={{ fontSize: '18px' , fontFamily: 'Roboto' , marginLeft: '10px' }}>News</Button>
              <Button color="inherit" sx={{ fontSize: '18px' , fontFamily: 'Roboto' , marginLeft: '10px' }}>Contact</Button>
            </Box>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box sx={{ marginRight: 1 }}>
            
              </Box>
              <Box>
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
      <Container>
        
      </Container>
    </React.Fragment>
  );
}