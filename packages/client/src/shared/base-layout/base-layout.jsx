import { Box, Container } from '@mui/material';
import { Outlet } from 'react-router';
import { Header } from '../../widgets/header/ui/header';

export const BaseLayout = () => {
  return (
    <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <Container sx={{ flex: 1 }} component="main">
        <Outlet />
      </Container>
    </Box>
  );
};
