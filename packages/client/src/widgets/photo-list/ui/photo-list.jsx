import { photoStore } from '@entities/photo';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import { Box, Button, Grid2 as Grid, Pagination } from '@mui/material';
import { PhotoCard } from './photo-card.jsx';

export const PhotoList = observer(() => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
          {photoStore.photos?.map((photo) => (
            <Grid key={photo.id} size={{ xs: 12, lg: 4, md: 6 }}>
              <PhotoCard {...photo} />
            </Grid>
          ))}
        </Grid>
      </Box>
      <Button component={Link} to={'/album/1?page=2'}>
        next
      </Button>
      <Pagination count={10} shape="rounded" />
    </>
  );
});
