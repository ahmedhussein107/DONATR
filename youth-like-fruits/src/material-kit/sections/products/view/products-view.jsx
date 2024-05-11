import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import ProductSearch from '../product-search';
import img from '../../../../assets/donor_icon.png';
import RequestCard from '../../../../AdminPage/DonorsList/RequestCard';
import ProductSort from '../product-sort';
import ProductFilters from '../product-filters';
import { Box, TextField } from '@mui/material';

export default function ProductsView(props) {
  const pageTitle = props.title;
  const sort = props.sort;
  const filter = props.filter;
  const [openFilter, setOpenFilter] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const cards = [
    { date: '20/02/2020', name: 'Dr. Hamada', image: img, id: 1 },
    { date: '20/02/2020', name: 'Dr. Ahmed Hamada', image: img, id: 2 },
    { date: '20/02/2020', name: 'Dr. Ahmed Mohamed Hamada', image: img, id: 3 },
    { date: '20/02/2020', name: 'Dr. Wael', image: img, id: 4 },
    { date: '20/02/2020', name: 'Dr. Gohary', image: img, id: 5 },
    { date: '20/02/2020', name: 'Prof Yasser', image: img, id: 6 },
    { date: '20/02/2020', name: 'Dr. Tawfik', image: img, id: 7 },
    { date: '20/02/2020', name: 'Prof Slim', image: img, id: 8 },
  ];

  const filteredCards = searchTerm
    ? cards.filter((card) =>
      card.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    : cards;

  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Container>
      <Stack direction="row" justifyContent="space-between" m={2}>
        <Typography
          variant="h5"
          sx={{ color: '#000', fontFamily: 'sans-serif', fontWeight: 'bold' }}
        >
          {pageTitle}
        </Typography>
        <Stack direction="row" alignItems="center" spacing={1}>
          {filter && (
            <ProductFilters
              openFilter={openFilter}
              onOpenFilter={handleOpenFilter}
              onCloseFilter={handleCloseFilter}
            />
          )}
          <TextField
            name="email"
            label="Search Donor"
            onChange={handleChange}
            type="text"
            variant="filled"
          />
          {sort && <ProductSort />}
        </Stack>
      </Stack>

      <Grid container spacing={3}>
        {filteredCards.map((card) => (
          <Grid key={card.id} item xs={12} sm={6} md={3}>
            <RequestCard date={card.date} name={card.name} image={card.image} id={card.id} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
