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
  const age = props.age;
  const season = props.season;
  const material = props.material;
  const books = props.books;
  const stationary = props.stationary;
  const bookName = props.bookName;
  const author = props.author;
  const edition = props.edition;
  const shortSummary = props.shortSummary;
  const category = props.category;
  const infopic = props.infopic;
  const fruitsVeggies = props.fruitsVeggies;
  const cannedFood = props.cannedFood;
  const freshMeals = props.freshMeals;
  const bakedGoods = props.bakedGoods;
  const itemName = props.itemName;
  const medicalDevice = props.medicalDevice;
  const medicalEquipment = props.medicalEquipment;
  const medication = props.medication;
  const medicalUse = props.medicalUse;
  const hospitalName = props.hospitalName;
  const hospitalAddress = props.hospitalAddress;
  const governerate = props.governerate;
  const area = props.area;
  const patientName = props.patientName;
  const bloodType = props.bloodType;



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

