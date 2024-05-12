import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import {Alert} from '@mui/material';
import img from '../../../../assets/donor_icon.png';
import RequestCard from '../../../../AdminPage/DonorsList/RequestCard';
import { Box, TextField, MenuItem, Select, FormControl, FormLabel } from '@mui/material';
import ProductFilters from '../product-filters';
import Popup from '../../../../AdminPage/Popup';
import RequestedItemsCard from '../../../../DonorPage/requestedItems/RequestedItemsCard';

import {items} from '../../../_mock/requests';
import FilterClothes from '../filterClothes';
import FilterSchool from '../filterSchool';
import FilterToys from '../filterToys';
import FilterFood from '../filterFood';
import FilterMedicalSupplies from '../filterMedicalSupplies';
import FilterBloodDonations from '../filterBloodDonations';

export default function RequestedItemsView(props) {
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
  const [filter, setFilter] = useState(false);

  const isGood = (card) => {
    if (currentCategory !== 'All' && card.generalType !== currentCategory) return false;
    if (currentFilters === null) return true; 
    switch (currentCategory) {
        case 'Clothes':
            if (currentFilters.maxAge !== null && (card.details.age > currentFilters.maxAge || card.details.age < currentFilters.minAge)) return false;
            if (currentFilters.gender !== null && card.details.gender !== currentFilters.gender) return false;
            if (currentFilters.season !== null && card.details.season !== currentFilters.season) return false;
            return true;
        case 'School Supplies':
            if (currentFilters.type !== null && card.details.type !== currentFilters.type) return false;
            return true;
        case 'Toys':
            if (currentFilters.maxAge !== null && (card.details.age > currentFilters.maxAge || card.details.age < currentFilters.minAge)) return false;
            if (currentFilters.gender !== null && card.details.gender !== currentFilters.gender) return false;
            if (currentFilters.subtype !== null && card.details.subtype !== currentFilters.subtype) return false;
            return true;
        case 'Food':
            if (currentFilters.subtype !== null && card.details.subtype !== currentFilters.subtype) return false;
            return true;
        case 'Medical Suplies':
            if (currentFilters.subtype !== null && card.details.subtype !== currentFilters.subtype) return false;
            if (card.details.subtype === 'Medication' && currentFilters.medicalUse !== null && card.details.medicalUse !== currentFilters.medicalUse) return false;
            return true;
        case 'Blood Donations':
            if (currentFilters.hospitalName !== null && card.details.hospitalName !== currentFilters.hospitalName) return false;
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
      {openPopup && <Popup 
        onClose={onPopupClose} 
        info={currentInfo} 
        save={false} 
        accept={true} 
        reject={true} 
        download={true} 
        onClickAccept={
          () => {
            handleDelete();
            onPopupClose();
            setAlertType('accept');
            showThatAlert();
          }
        }
        onClickReject={
          () => {
            handleDelete();
            onPopupClose();
            setAlertType('reject');
            showThatAlert();
          }
        }
        onClickDownload={
          () => {
            
          }
        }
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
            <MenuItem value="Clothes">Clothes</MenuItem>
            <MenuItem value="Toys">Toys</MenuItem>
            <MenuItem value="Food">Food</MenuItem>
            <MenuItem value="Medical Suplies">Medical Supplies</MenuItem>
            <MenuItem value="School Supplies">School Supplies</MenuItem>
            <MenuItem value="Blood Donations">Blood Donations</MenuItem>

          </Select>}
          
          {
            filter && currentCategory === 'Clothes' && <FilterClothes
            openFilter={openFilter}
            onOpenFilter={handleOpenFilter}
            onCloseFilter={handleCloseFilter}
            set={setCurrentFilters}/>
          }
          {
            filter && currentCategory === 'School Supplies' && <FilterSchool
            openFilter={openFilter}
            onOpenFilter={handleOpenFilter}
            onCloseFilter={handleCloseFilter}
            set={setCurrentFilters}/>
          }
          {
            filter && currentCategory === 'Toys' && <FilterToys
            openFilter={openFilter}
            onOpenFilter={handleOpenFilter}
            onCloseFilter={handleCloseFilter}
            set={setCurrentFilters}/>
          }
          {
            filter && currentCategory === 'Food' && <FilterFood
            openFilter={openFilter}
            onOpenFilter={handleOpenFilter}
            onCloseFilter={handleCloseFilter}
            set={setCurrentFilters}/>
          }
          {
            filter && currentCategory === 'Medical Suplies' && <FilterMedicalSupplies
            openFilter={openFilter}
            onOpenFilter={handleOpenFilter}
            onCloseFilter={handleCloseFilter}
            set={setCurrentFilters}/>
          }
          {
            filter && currentCategory === 'Blood Donations' && <FilterBloodDonations
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
              setCurrentInfo(
              {   orgName: card.orgName ,
                  type: card.type ,
                  id: card.id ,
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