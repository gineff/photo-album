import { useParams, useNavigate } from 'react-router-dom';
import { useMediaQuery, useTheme } from '@mui/material';
import { photoStore } from '@entities/photo';

export const usePhotoModal = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
  const { photoId, albumId } = useParams();

  const isOpen = Boolean(photoId && !isMobile);
  const url = photoId && photoStore.getPhotoById(photoId);

  const handleClose = () => {
    navigate(`/album/${albumId}`);
  };
  return { isOpen, handleClose, url };
};
