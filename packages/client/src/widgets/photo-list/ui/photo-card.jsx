import { Box, Card, CardMedia, Skeleton } from '@mui/material';
import { generateAssetLink } from '@features/generate-asset-link';
import { Link } from 'react-router-dom';

export const PhotoCard = ({ image }) => (
  <Box component={Link} to={'/'} underline="none">
    <Card sx={{ padding: '15px ' }}>
      {image ? (
        <CardMedia
          sx={{ aspectRatio: '16/9', borderRadius: '8px' }}
          image={generateAssetLink(image)}
          title="green iguana"
        />
      ) : (
        <Skeleton variant="rounded" sx={{ paddingTop: '56%', width: '100%' }} />
      )}
    </Card>
  </Box>
);
