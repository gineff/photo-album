import { Dialog, DialogContent, DialogActions } from '@mui/material';
import { observer } from 'mobx-react';
import { useParams } from 'react-router-dom';
import { usePhotoModal } from '../lib/use-photo-modal';
import { photoStore } from '@entities/photo';
import { generateAssetLink } from '@features/generate-asset-link';
import { PhotoController } from '@shared/photo-controller';

export const PhotoModal = observer(() => {
  const { photoIndex } = useParams();
  const { isOpen, handleClose } = usePhotoModal();

  if (!photoIndex) return null;

  const url = generateAssetLink(photoStore.getPhotoByIndex(+photoIndex)?.image);

  return (
    <Dialog onClose={handleClose} open={isOpen} maxWidth="xl">
      <DialogContent sx={{ padding: '20px 20px 0' }}>
        {url && (
          <img
            src={url}
            style={{
              maxWidth: 'calc(100vw - 100px)',
              maxHeight: 'calc(100vh - 154px)',
              borderRadius: '8px',
            }}
          />
        )}
      </DialogContent>
      <DialogActions>
        <PhotoController currentPhotoIndex={+photoIndex} />
      </DialogActions>
    </Dialog>
  );
});
