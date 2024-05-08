import * as React from 'react';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

function renderRow(props) {
    const ContacttList = [
        {label: 'Donatr news' , directory: '/login' , normalColor: '#1D8AC5' , hoverColor: '#155E85'},
        {label: 'Events' , directory: '/register' , normalColor: '#3A69AE' , hoverColor: '#2B4A7D'},
        {label: 'User agreement' , directory: '/login' , normalColor: '#1D8AC5' , hoverColor: '#155E85'},
        {label: 'Most common questions' , directory: '/register' , normalColor: '#3A69AE' , hoverColor: '#2B4A7D'},
    ]

  return (
    <ListItem style={style} key={index} component="div" disablePadding>
      <ListItemButton>
        <ListItemText primary={`Item ${index + 1}`} />
      </ListItemButton>
    </ListItem>
  );
}

export default function VirtualizedList() {
  return (
    <Box
      sx={{ width: '100%', height: 400, maxWidth: 360, bgcolor: 'background.paper' }}
    >
      <FixedSizeList
        height={400}
        width={360}
        itemSize={46}
        itemCount={200}
        overscanCount={5}
      >
        {renderRow}
      </FixedSizeList>
    </Box>
  );
}
