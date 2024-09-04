import { Box, Card, Skeleton, Stack } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export const AlbumCard = (props) => {
  const { cover, title, count, id } = props;
  return (
    <Box to={`/album/${id}`} component={Link} sx={{ textDecoration: 'none', color: 'inherit' }}>
      <Stack direction="column" spacing={2}>
        <Card sx={{ padding: '15px ' }}>
          {cover ? (
            <CardMedia
              sx={{ aspectRatio: '16/9', borderRadius: '8px' }}
              image={cover}
              title="green iguana"
            />
          ) : (
            <Skeleton variant="rounded" sx={{ paddingTop: '57%', width: '100%' }} />
          )}
        </Card>
        <Stack direction="column" spacing={-1}>
          <Typography variant="h6" sx={{ fontWeight: 500 }}>
            {title}
          </Typography>
          <Typography gutterBottom variant="h6" component="div" sx={{ color: 'text.secondary' }}>
            {`${count} фото`}
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};
