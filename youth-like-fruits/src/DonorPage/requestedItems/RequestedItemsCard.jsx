import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function RequestedItemsCard(props) {
  const day = props.day;
  const month = props.month;
  const year = props.year;
  const orgName = props.orgName;
  const onClick = props.onClick;
  const type = props.type;
  const details = props.details;

  return (
    <Card sx={{maxHeight: 600, maxWidth: 600 }} onClick={onClick}>
      <CardActionArea>
      <CardContent style={{textAlign: 'right'}}>
          <Typography variant="body2" color="text.secondary">
            {day + "/" + month + "/" + year}
          </Typography>
        </CardContent>
        <CardMedia sx={{ maxWidth: 150, marginLeft: "15%", marginTop: "1%", borderRadius: '100%'}}
          component="img"
          height="auto" 
          width="100%" 
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {orgName}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

RequestedItemsCard.defaultProps = {
    day: 11,
    month: 11,
    year: 2011,
    orgName: '57357',
    onClick: () => {},
    type: '',
    details: {} 
}

