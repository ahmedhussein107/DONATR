import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import img from '../../assets/donor_icon.png';

export default function RequestCard(props) {
  const publishDate = props.date;
  const name = props.name;
  const image = props.image;

  return (
    <Card sx={{maxHeight: 600, maxWidth: 600 }}>
      <CardActionArea>
      <CardContent style={{textAlign: 'right'}}>
          <Typography variant="body2" color="text.secondary">
            20/9/2003
          </Typography>
        </CardContent>
        <CardMedia sx={{ maxWidth: 150, marginLeft: "15%", marginTop: "1%"}}
          component="img"
          height="auto" 
          width="100%" 
          image={img} 
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Dr. Ahmed Mohamed El-Gohary
            
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
