import { observer } from 'mobx-react';
import { albumStore } from '@entities/album';
import { Breadcrumbs as MuiBreadcrumbs, Link, Typography } from '@mui/material';
import { Link as RouterLink, useParams } from 'react-router-dom';

export const Breadcrumbs = observer(() => {
  const { albumId, photoId } = useParams();

  const albumTitle = albumStore.albumTitle;
  return (
    <MuiBreadcrumbs aria-label="breadcrumb" p={2} sx={{ mb: 1 }}>
      <Link underline="hover" color="text.primary" to="/album" component={RouterLink}>
        Альбомы
      </Link>
      {albumId && (
        <Link
          underline="hover"
          color={photoId ? 'text.primary' : 'text.secondary'}
          to={`/album/${albumTitle}`}
          component={RouterLink}
        >
          {albumTitle}
        </Link>
      )}
      {photoId && (
        <Typography color="text.secondary" aria-current="page">
          {photoId}
        </Typography>
      )}
    </MuiBreadcrumbs>
  );
});
