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
import MyButton from '../MyButton/MyButton';
import { Link } from 'react-router-dom';

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

export default function ElevateAppBar(props) {
  const actionsList = <Box sx={{ display: 'flex', justifyContent: 'center'}}>
                        <Button color="inherit" sx={{ fontSize: '18px' , fontFamily: 'Roboto' , marginLeft: '10px' }}> Home</Button>
                        <Button color="inherit" sx={{ fontSize: '18px' , fontFamily: 'Roboto' , marginLeft: '10px' }}>About</Button>
                        <Button color="inherit" sx={{ fontSize: '18px' , fontFamily: 'Roboto' , marginLeft: '10px' }}>News</Button>
                        <Button color="inherit" sx={{ fontSize: '18px' , fontFamily: 'Roboto' , marginLeft: '10px' }}>Contact</Button>
                      </Box>;

  const list = [props.buttonsList.map(
                item => <MyButton 
                          label={item.label}
                          directory={item.directory}
                          normalColor={item.normalColor}
                          hoverColor={item.hoverColor}
                        />)]

  const buttonsList = <Box sx={{ display: 'flex', alignItems: 'center' }}>{list}</Box>
  
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
            {actionsList}
            <Box sx={{ flexGrow: 1 }} />
            {buttonsList}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
      <Container></Container>
    </React.Fragment>
  );
}