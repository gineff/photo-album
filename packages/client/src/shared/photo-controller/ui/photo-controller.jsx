import { observer } from 'mobx-react';
import { albumStore } from '@entities/album';
import { Box, IconButton, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigatePages } from '../lib/use-navigate-pages';

export const PhotoController = observer(({ currentPhotoIndex }) => {
  const total = albumStore.albumCount;

  const { navigateNextPage, navigatePreviousPage, navigateToAlbum } = useNavigatePages(
    currentPhotoIndex,
    total
  );

  return (
    <Box flex justifyContent="space-between" p={2} sx={{ paddingY: 0 }}>
      <Typography display="inline" color="text.secondary">{`${
        currentPhotoIndex + 1
      }/${total}`}</Typography>
      <IconButton onClick={navigatePreviousPage} disabled={!navigatePreviousPage}>
        <ArrowBackIcon />
      </IconButton>
      <IconButton onClick={navigateNextPage} disabled={!navigateNextPage}>
        <ArrowForwardIcon />
      </IconButton>
      <IconButton onClick={navigateToAlbum}>
        <CloseIcon />
      </IconButton>
    </Box>
  );
});
