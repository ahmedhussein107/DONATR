import * as React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import ClickAwayListener from '@mui/material/ClickAwayListener';

export default function TriggersTooltips() {
  const [open, setOpen] = React.useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };

  return (
    <div style={{ backgroundColor: '#3C4F59', padding: '22px', margin: '0-0px' }}>
      <Grid container justifyContent="space-around">
        <Grid item>
          <Tooltip 
            disableFocusListener 
            title="Home Appliances"
            arrow 
          >
            <Button style={{ color: 'white' }}>
              <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M36.0938 18.9062L24.1914 32.6562L18.9062 27.4785" fill="#91BE55"/>
                <path d="M36.0938 18.9062L24.1914 32.6562L18.9062 27.4785" stroke="#91BE55" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M49.7471 12.071C40.1414 10.3479 36.17 9.07178 27.5 5.15625C18.83 9.07178 14.8586 10.3479 5.25296 12.071C3.51272 39.6526 25.8436 49.1767 27.5 49.8438C29.1565 49.1767 51.4873 39.6526 49.7471 12.071Z" fill="#1D8AC5" stroke="#1D8AC5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Button>
          </Tooltip>
          <p style={{ color: 'white', fontSize: '12px', textAlign: 'center' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Grid>
        <Grid item style={{ textAlign: 'center' }}>
          <Tooltip 
            disableFocusListener 
            title="School Supplies"
            arrow 
          >
            <Button style={{ color: 'white' }}>
              <svg width="47" height="55" viewBox="0 0 47 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M30.4205 12.5389C20.8718 6.37074 10.9889 10.7987 1.85808 1.1307C-0.268869 -1.12516 0.966483 26.4286 12.3962 36.87C20.7525 44.4969 33.655 43.6461 38.0055 36.234C42.3561 28.8219 39.9692 18.706 30.4205 12.5389ZM14.4264 21.3024C23.6647 30.0035 33.2253 35.1598 45.7936 37.0934L14.4264 21.3024Z" fill="#1D8AC5"/>
                <path d="M14.4264 21.3024C23.6647 30.0035 33.2253 35.1598 45.7936 37.0934M30.4205 12.5389C20.8718 6.37074 10.9889 10.7987 1.85808 1.1307C-0.268869 -1.12516 0.966483 26.4286 12.3962 36.87C20.7525 44.4969 33.655 43.6461 38.0055 36.234C42.3561 28.8219 39.9692 18.706 30.4205 12.5389Z" stroke="#1D8AC5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Button>
          </Tooltip>
          <p style={{ color: 'white', fontSize: '12px', textAlign: 'center' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Grid>
        <Grid item>
          <Tooltip 
            disableFocusListener 
            title="Blood Donations"
            arrow 
          >
            <Button style={{ color: 'white' }}>
              <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M42.9688 34.375C42.9688 43.8679 36.9929 49.8438 27.5 49.8438C18.0071 49.8438 12.0312 43.8679 12.0312 34.375C12.0312 24.1882 23.1204 10.436 26.5214 6.45821C26.6424 6.31688 26.7926 6.20343 26.9616 6.12564C27.1306 6.04785 27.3145 6.00757 27.5005 6.00757C27.6866 6.00757 27.8705 6.04785 28.0395 6.12564C28.2085 6.20343 28.3587 6.31688 28.4797 6.45821C31.8796 10.436 42.9688 24.1882 42.9688 34.375Z" fill="#1D8AC5" stroke="#1D8AC5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M36.9531 35.2344C36.9531 37.2857 36.1383 39.2529 34.6878 40.7034C33.2373 42.1539 31.27 42.9688 29.2188 42.9688" fill="#1D8AC5"/>
                <path d="M36.9531 35.2344C36.9531 37.2857 36.1383 39.2529 34.6878 40.7034C33.2373 42.1539 31.27 42.9688 29.2188 42.9688" stroke="#1D8AC5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Button>
          </Tooltip>
          <p style={{ color: 'white', fontSize: '12px', textAlign: 'center' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Grid>
        <Grid item>
            <div>
              <Tooltip
                disableFocusListener
                title="Medical Supplies"
                arrow
              >
                <Button style={{ color: 'white' }}>
                  <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M42.9688 34.375C42.9688 43.8679 36.9929 49.8438 27.5 49.8438C18.0071 49.8438 12.0312 43.8679 12.0312 34.375C12.0312 24.1882 23.1204 10.436 26.5214 6.45821C26.6424 6.31688 26.7926 6.20343 26.9616 6.12564C27.1306 6.04785 27.3145 6.00757 27.5005 6.00757C27.6866 6.00757 27.8705 6.04785 28.0395 6.12564C28.2085 6.20343 28.3587 6.31688 28.4797 6.45821C31.8796 10.436 42.9688 24.1882 42.9688 34.375Z" fill="#1D8AC5" stroke="#1D8AC5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M36.9531 35.2344C36.9531 37.2857 36.1383 39.2529 34.6878 40.7034C33.2373 42.1539 31.27 42.9688 29.2188 42.9688" fill="#1D8AC5"/>
                    <path d="M36.9531 35.2344C36.9531 37.2857 36.1383 39.2529 34.6878 40.7034C33.2373 42.1539 31.27 42.9688 29.2188 42.9688" stroke="#1D8AC5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Button>
              </Tooltip>
            </div>
          <p style={{ color: 'white', fontSize: '12px', textAlign: 'center' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Grid>
      </Grid>
    </div>
  );
}