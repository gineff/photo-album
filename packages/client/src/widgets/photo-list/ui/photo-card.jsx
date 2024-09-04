import { Box, Card, CardMedia, Skeleton } from '@mui/material';
import { generateAssetLink } from '@features/generate-asset-link';
import { Link, useParams, useSearchParams } from 'react-router-dom';

export const PhotoCard = ({ image, index }) => {
  const [searchParams] = useSearchParams();
  const { albumId } = useParams();
  return (
    <Box component={Link} to={`/album/${albumId}/photo/${index}?${searchParams}`} underline="none">
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
};
