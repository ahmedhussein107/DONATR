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
                        <Link to = '/'>
                        <Button sx={{ fontSize: '18px' , fontFamily: 'Roboto' , marginLeft: '10px' , color: '#fff'}}> Home</Button>
                        </Link>
                        <Button sx={{ fontSize: '18px' , fontFamily: 'Roboto' , marginLeft: '10px' , color: '#fff'}}>About</Button>
                        <Button sx={{ fontSize: '18px' , fontFamily: 'Roboto' , marginLeft: '10px' , color: '#fff'}}>News</Button>
                       <Link to = '/contact'> 
                        <Button sx={{ fontSize: '18px' , fontFamily: 'Roboto' , marginLeft: '10px' , color: '#fff'}}>Contact</Button>
                       </Link>
                      </Box>;

  const listOfButtons = [props.buttonsList.map(
                item => <MyButton 
                          label={item.label}
                          directory={item.directory}
                          normalColor={item.normalColor}
                          hoverColor={item.hoverColor}
                        />)]
                      
  
  const listOfIcons = props.iconsList;

  const emptyButtonsList = props.buttonsList.length === 0;
  const emptyIconsList = props.iconsList.length === 0;

  const buttonsList = <Box sx={{ display: 'flex', alignItems: 'center' }}>{listOfButtons}</Box>
  
  const iconsList = <Box sx={{ display: 'flex', alignItems: 'center' , gap: '1vw'}}>{listOfIcons}</Box>

  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar style={{ backgroundColor: '#292F33' }}>
          <Toolbar>
            <Typography variant="h6" component="div" sx=
            {{  flexGrow: 0 ,
                fontFamily: 'sans-serif' , 
                fontWeight: 'bold' ,
                color: '#fff'
             }}>
              DONATR
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            {actionsList}
            <Box sx={{ flexGrow: 1 }} />
            {!emptyButtonsList && buttonsList}
            {!emptyIconsList && iconsList}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
      <Container></Container>
    </React.Fragment>
  );
}

ElevateAppBar.defaultProps = {
  buttonsList : [],
  iconsList : []
};

ElevateAppBar.propTypes = {
  buttonsList : PropTypes.array,
  iconsList : PropTypes.array,
}