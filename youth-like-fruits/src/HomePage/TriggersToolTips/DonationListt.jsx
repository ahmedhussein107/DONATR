import React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';

import homeAppliances from "../../assets/Home.png";
import educationalSupplies from "../../assets/School.png";
import medicalSupplies from "../../assets/Medical.png";

export default function DonationListt() {
  return (
    <div style={{ backgroundColor: '#3C4F59', padding: '2%', margin: '0-0px' }}>
      <Grid container justifyContent="center" spacing={3}>
        <Grid item xs={12} md={3} style={{ marginTop: '-0.5%'}}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={homeAppliances} alt="Home Appliances" width="100" height="100" />
            <div style={{ marginLeft: '-4%' }}>
              <p style={{ color: 'white', fontSize: '15px', marginBottom: '5px' }}><strong>Home Appliances</strong></p>
              <p style={{ color: 'white', fontSize: '13px' }}>Donate clothes, kitchen supplies, food, or electrical appliances</p>
            </div>
          </div>
        </Grid>

        <Grid item xs={12} md={3} style={{ marginTop: '0.2%', marginBottom: '5px' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={educationalSupplies} alt="School Supplies" width="60" height="60" />
            <div style={{ marginLeft: '10px' }}>
              <p style={{ color: 'white', fontSize: '15px', marginBottom: '5px' }}><strong>School Supplies</strong></p>
              <p style={{ color: 'white', fontSize: '13px' }}>Donate books or school supplies for schools in need</p>
            </div>
          </div>
        </Grid>

        <Grid item xs={12} md={3} style={{ marginTop: '0.2%', marginBottom: '5px' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={medicalSupplies} alt="Medical Supplies" width="55" height="55" />
            <div style={{ marginLeft: '10px' }}>
              <p style={{ color: 'white', fontSize: '15px', marginBottom: '5px' }}><strong>Medical Supplies</strong></p>
              <p style={{ color: 'white', fontSize: '13px' }}>Donate medication or medical supplies</p>
            </div>
          </div>
        </Grid>

        <Grid item xs={12} md={3} style={{ marginTop: '5px', marginBottom: '5px' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M42.9688 34.375C42.9688 43.8679 36.9929 49.8438 27.5 49.8438C18.0071 49.8438 12.0312 43.8679 12.0312 34.375C12.0312 24.1882 23.1204 10.436 26.5214 6.45821C26.6424 6.31688 26.7926 6.20343 26.9616 6.12564C27.1306 6.04785 27.3145 6.00757 27.5005 6.00757C27.6866 6.00757 27.8705 6.04785 28.0395 6.12564C28.2085 6.20343 28.3587 6.31688 28.4797 6.45821C31.8796 10.436 42.9688 24.1882 42.9688 34.375Z" fill="#1D8AC5" stroke="#1D8AC5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M36.9531 35.2344C36.9531 37.2857 36.1383 39.2529 34.6878 40.7034C33.2373 42.1539 31.27 42.9688 29.2188 42.9688" fill="#1D8AC5"/>
              <path d="M36.9531 35.2344C36.9531 37.2857 36.1383 39.2529 34.6878 40.7034C33.2373 42.1539 31.27 42.9688 29.2188 42.9688" stroke="#1D8AC5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <div style={{ marginLeft: '10px' }}>
              <p style={{ color: 'white', fontSize: '15px', marginBottom: '5px' }}><strong>Blood Donations</strong></p>
              <p style={{ color: 'white', fontSize: '13px' }}>Consider what blood type is needed by each hospital</p>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
