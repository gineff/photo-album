import { Box, Container } from '@mui/material';
import { Outlet } from 'react-router';


export const BaseLayout = () => {
  return (
    <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Container sx={{ flex: 1 }} component="main">
        <Outlet />
      </Container>
    </Box>
  );
};
