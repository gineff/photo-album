import { useParams } from 'react-router-dom';
import { useMediaQuery, useTheme } from '@mui/material';
import { useNavigateToCurrentAlbum } from '@shared/use-navigate-to-current-album';

export const usePhotoModal = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
  const { photoIndex } = useParams();
  const { navigateToCurrentAlbum } = useNavigateToCurrentAlbum();

  const isOpen = Boolean(photoIndex && !isMobile);

  return { isOpen, handleClose: () => navigateToCurrentAlbum() };
};
