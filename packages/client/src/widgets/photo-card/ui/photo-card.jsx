import { useParams } from 'react-router-dom';
import { observer } from 'mobx-react';
import { Box } from '@mui/material';
import { generateAssetLink } from '@features/generate-asset-link';
import { photoStore } from '@/entities/photo';
import { PhotoController } from '@shared/photo-controller';

export const PhotoCard = observer(() => {
  const { photoIndex } = useParams();

  const url = generateAssetLink(photoStore.getPhotoByIndex(+photoIndex)?.image);

  return (
    <Box display="flex" justifyContent="center">
      <Box sx={{ textAlign: 'center' }}>
        <PhotoController currentPhotoIndex={+photoIndex} />
        <img
          src={url}
          style={{
            maxWidth: 'calc(100vw - 40px)',
            maxHeight: 'calc(100vh - 40px)',
            borderRadius: '8px',
            marginTop: '8px',
          }}
        />
      </Box>
    </Box>
  );
});
