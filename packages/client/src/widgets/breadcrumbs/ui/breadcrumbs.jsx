import { observer } from 'mobx-react';
import { albumStore } from '@entities/album';
import { Breadcrumbs as MuiBreadcrumbs, Link, Typography } from '@mui/material';
import { Link as RouterLink, useParams } from 'react-router-dom';

export const Breadcrumbs = observer(() => {
  const { albumId, photoIndex } = useParams();

  const albumTitle = albumStore.albumTitle;
  return (
    <MuiBreadcrumbs aria-label="breadcrumb" p={2} sx={{ mb: 1 }}>
      <Link underline="hover" color="text.primary" to="/album" component={RouterLink}>
        Альбомы
      </Link>
      {albumId && (
        <Link
          underline="hover"
          color={photoIndex ? 'text.primary' : 'text.secondary'}
          to={`/album/${albumId}`}
          component={RouterLink}
        >
          {albumTitle}
        </Link>
      )}
      {photoIndex && (
        <Typography color="text.secondary" aria-current="page">
          {photoIndex}
        </Typography>
      )}
    </MuiBreadcrumbs>
  );
});
