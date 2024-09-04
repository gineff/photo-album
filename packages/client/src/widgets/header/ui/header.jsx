import {
  AppBar,
  Toolbar,
  Container,
  Typography,
  Box,
  Tooltip,
  IconButton,
  Avatar,
} from '@mui/material';
import CameraIcon from '@mui/icons-material/Camera';

export const Header = () => {
  return (
    <AppBar
      position="static"
      sx={{
        borderRadius: '0 0 16px 16px',
        mb: 3,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <CameraIcon sx={{ mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              sx={{
                mr: 2,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              Фотогалерея
            </Typography>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Andrey Chesnov">
              <IconButton sx={{ p: 0 }} href="https://t.me/gineff" target="_blank" rel="noopener">
                <Avatar alt="Andrey Chesnov" src="/images/Chesnov_Andrey.jpg" />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
