import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function RequestCard(props) {
  const day = props.day;
  const month = props.month;
  const year = props.year;
  const name = props.name;
  const image = props.image;
  const onClick = props.onClick;
  const type = props.type;

  return (
    <Card sx={{maxHeight: 600, maxWidth: 600 }} onClick={onClick}>
      <CardActionArea>
      <CardContent style={{textAlign: 'right'}}>
          <Typography variant="body2" color="text.secondary">
            {day + "/" + month + "/" + year}
          </Typography>
        </CardContent>
        <CardMedia sx={{ maxWidth: 150, marginLeft: "15%", marginTop: "1%"}}
          component="img"
          height="auto" 
          width="100%" 
          image={image} 
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

