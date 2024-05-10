import { useState } from 'react';

import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import ProductSearch from '../product-search';

import img from '../../../../assets/donor_icon.png';

import RequestCard from '../../../../AdminPage/DonorsList/RequestCard'
import ProductSort from '../product-sort';
import ProductFilters from '../product-filters';
import { Box } from '@mui/material';

// ----------------------------------------------------------------------

export default function ProductsView(props) {
  const pageTitle = props.title;
  const sort = props.sort;
  const filter = props.filter;
  const search = props.search;
  const [openFilter, setOpenFilter] = useState(false);

  const cards = [
    {date: '20/02/2020' , name: 'Dr. Hamada' , image: img , id: 1},
    {date: '20/02/2020' , name: 'Dr. Ahmed Hamada' , image: img , id: 1},
    {date: '20/02/2020' , name: 'Dr. Ahmed Mohamed Hamada' , image: img , id: 1},
    {date: '20/02/2020' , name: 'Dr. Wael' , image: img , id: 1},
    {date: '20/02/2020' , name: 'Dr. Gohary' , image: img , id: 1},
    {date: '20/02/2020' , name: 'Prof Yasser' , image: img , id: 1},
    {date: '20/02/2020' , name: 'Dr. Tawfik' , image: img , id: 1},
    {date: '20/02/2020' , name: 'Prof Slim' , image: img , id: 1},
  ]

  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };

  return (
    <Container>
      <Box sx={{
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', 
        padding: '20px', 
        borderRadius: '8px', 
        backgroundColor: '#fff',
        textAlign: 'center',
      }}>
        <Typography variant="h5" sx={{color: '#000', fontFamily: 'sans-serif', fontWeight: 'bold'}}>
          {pageTitle}
        </Typography>
      </Box>

      <Stack
        direction="row"
        alignItems="center"
        flexWrap="wrap-reverse"
        justifyContent="flex-end"
        sx={{ mb: 5 }}
      >
        <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
          {filter && <ProductFilters
            openFilter={openFilter}
            onOpenFilter={handleOpenFilter}
            onCloseFilter={handleCloseFilter}
          />}
          {search && <ProductSearch />}
          {sort && <ProductSort />}
        </Stack>
      </Stack>

      <Grid container spacing={3}>
        {cards.map((card) => (
          <Grid key={card.id} xs={12} sm={6} md={3}>
            <RequestCard date={card.date} name={card.name} image={card.image} id={card.id}/>
          </Grid>
        ))}
      </Grid>

    </Container>
  );
}
