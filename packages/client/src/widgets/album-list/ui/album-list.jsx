import { useEffect } from 'react';
import { Box, Grid2 as Grid, Paper } from '@mui/material';
import { observer } from 'mobx-react';
import { albumStore } from '../../../entities/album';
import { AlbumCard } from './album-card/index.jsx';
import { toJS } from 'mobx';

export const AlbumList = observer(() => {
  useEffect(() => {
    albumStore.loadAlbums();
  }, []);

  console.log(toJS(albumStore.albums));

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        {albumStore.albums?.map((album) => (
          <Grid key={album.id} size={{ xs: 12, lg: 6 }}>
            <AlbumCard {...album} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
});
