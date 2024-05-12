import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import clothesIcon from '../../assets/clothesIcon.png';
import toysIcon from '../../assets/toysIcon2.jpg';
import foodIcon from '../../assets/foodIcon.gif';
import medicalIcon from '../../assets/medicalIcon.jpg';
import schoolIcon from '../../assets/schoolIcon.jpg';
import bloodIcon from '../../assets/bloodIcon.jpg';
import reactIcon from '../../assets/react.svg';

export default function RequestedItemsCard(props) {
  const day = props.day;
  const month = props.month;
  const year = props.year;
  const orgName = props.orgName;
  const onClick = props.onClick;
  const type = props.type;
  const details = props.details;

  const getImage = () => {
    switch (type) {
        case 'Clothes':
            return clothesIcon;
        case 'Toys':
            return toysIcon;
        case 'Food':
            return foodIcon;
        case 'Medical Suplies':
            return medicalIcon;
        case 'School Supplies':
            return schoolIcon;
        case 'Blood Donations':
            return bloodIcon;
        default:
            return reactIcon;
    }
  }

  return (
    <Card sx={{minHeight: 250, maxHeight: 250, maxWidth: 600 }} onClick={onClick}>
      <CardActionArea>
      <CardContent style={{textAlign: 'right'}}>
          <Typography variant="body2" color="text.secondary">
            {day + "/" + month + "/" + year}
          </Typography>
        </CardContent>
        <CardMedia sx={{ maxWidth: 150, marginLeft: "15%", marginTop: "1%"}}
          component="img"
          height="150" 
          width="100%" 
          image={getImage()}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary" >
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

