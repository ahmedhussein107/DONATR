import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import {Alert} from '@mui/material';
import { MenuItem, Select } from '@mui/material';
import RequestedItemsCard from '../../../../DonorPage/requestedItems/RequestedItemsCard';

import {items2 as items} from '../../../_mock/requests';
import {items3 as items2}   from '../../../_mock/requests';
import FilterBloodDonations from '../filterBloodDonations';
import RequestedItemsPopup from '../../../../DonorPage/requestedItems/RequestedItemsPopup';
import { Filter } from 'react-feather';
import FilterTeachingCases from './teachingFilter';
import FilterMedicalCases from './hospitalFilter';


export default function ProbonoView(props) {
  const pageTitle = props.title;
  const [openFilter, setOpenFilter] = useState(false);
  const [openPopup, setOpenPopup] = useState(false);
  const [currentInfo, setCurrentInfo] = useState(null);

  const onPopupClose = () => {
    setOpenPopup(false);
  }

  const onPopupOpen = () => {
    setOpenPopup(true);
  }
  
  const [cards, setCards] = useState(items);
  const [selectedId, setSelectedId] = useState(null);
  const [currentFilters, setCurrentFilters] = useState(null);
  const [currentCategory, setCurrentCategory] = useState('All');
  const [filter, setFilter] = useState(true);

  const isGood = (card) => {
    if (currentCategory !== 'All' && card.generalType !== currentCategory) return false;
    if (currentFilters === null) return true; 
    switch (currentCategory) {
        case 'Teaching Posts':
            if (currentFilters.subject !== null && card.details.subject !== currentFilters.subject) return false;
            if (currentFilters.governorate !== null && card.details.governorate !== currentFilters.governorate) return false;
            if (currentFilters.area !== null && card.details.area !== currentFilters.area) return false;
            return true;
        case 'Medical Cases':
            if (currentFilters.speciality !== null && card.details.speciality !== currentFilters.speciality) return false;
            if (currentFilters.organizationName !== null && card.details.ciorganizationNamety !== currentFilters.ciorganizationNamety) return false;
            if (currentFilters.governorate !== null && card.details.governorate !== currentFilters.governorate) return false;
            if (currentFilters.area !== null && card.details.area !== currentFilters.area) return false;
            return true;
        default:
            return true;
    }
  }

  const [ok , setOk] = useState(false);

  const filteredCards = ok ? items.filter((card) => isGood(card)) : items;

  const handleOpenFilter = () => {
    setOpenFilter(true);
    setOk(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
    setOk(true);
    console.log(currentFilters);
  };


  const handleCategoryChange = (event) => {
    setFilter(event.target.value !== 'All');
    setCurrentCategory(event.target.value);
    setOk(true);
    setCurrentFilters(null);
    console.log(currentFilters);
  };

  const handleDelete = (event) => {
    const newCardList = cards.filter(card => card.id !== selectedId);
    setCards(newCardList);
    console.log(currentFilters);

  }

  const [showAlert, setShowAlert] = useState(false);
  
  const showThatAlert = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  }

  const [alertType , setAlertType] = useState(null);

  return (
    <Container>
      {openPopup && <RequestedItemsPopup
        onClose={onPopupClose}
        info={currentInfo.details}
        type={currentInfo.type}

      />}
      <Stack direction="row" justifyContent="space-between" m={2}>
        <Typography
          variant="h5"
          sx={{ color: '#000', fontFamily: 'sans-serif', fontWeight: 'bold' }}
        >
          {pageTitle}
        </Typography>
        <Stack direction="row" alignItems="center" spacing={1}>
         
            
          {<Select
            value={currentCategory}
            onChange={handleCategoryChange}
            variant="outlined"
          >
            <MenuItem value="All">All</MenuItem>
            <MenuItem value="Teaching Posts">Teaching Posts</MenuItem>
            <MenuItem value="Medical Cases">Medical Cases</MenuItem>

          </Select>}
          {
            filter && currentCategory === 'Teaching Posts' && <FilterTeachingCases
            openFilter={openFilter}
            onOpenFilter={handleOpenFilter}
            onCloseFilter={handleCloseFilter}
            set={setCurrentFilters}/>
          }
          {
            filter && currentCategory === 'Medical Cases' && <FilterMedicalCases
            openFilter={openFilter}
            onOpenFilter={handleOpenFilter}
            onCloseFilter={handleCloseFilter}
            set={setCurrentFilters}/>
          }
        </Stack>
      </Stack>

      <Grid container spacing={3} mb={2}>
        {filteredCards.map((card) => (
          <Grid key={card.id} xs={12} sm={6} md={3}>
            <RequestedItemsCard 
            day={card.day}
            month={card.month}
            year={card.year}
            orgName={card.orgName} 
            type={card.type}
            onClick={() => {
              setSelectedId(card.id);
              setCurrentInfo({   
                orgName: card.orgName ,
                type: card.type ,
                id: card.id ,
                details: card.details,
                image: card.image,
            });
            onPopupOpen();
            }} />
          </Grid>
        ))}
      </Grid>
      {showAlert && (
          <Alert severity={'success'} onClose={() => setShowAlert(false)}>
            {alertType==='accept' ? 
              'Donor Submession has been approved successfully!' : 
              'Donor Submession has beed disapproved successfully!'}
          </Alert>)}
    </Container>
  );
}