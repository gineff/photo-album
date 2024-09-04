import { photoStore } from '@entities/photo';
import { observer } from 'mobx-react';
import { Box, Stack, Grid2 as Grid } from '@mui/material';
import { PhotoItem } from './photo-item.jsx';
import { PhotoPagination } from './photo-pagination.jsx';

export const PhotoList = observer(() => {
  return (
    <Stack direction="column" spacing={4}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
          {photoStore.photos?.map((photo) => (
            <Grid key={photo.id} size={{ xs: 12, lg: 4, md: 6 }}>
              <PhotoItem {...photo} />
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <PhotoPagination />
      </Box>
    </Stack>
  );
});
