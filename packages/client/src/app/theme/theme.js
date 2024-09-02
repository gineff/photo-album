import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  mixins: {
    centred: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h1: {
      fontSize: '3rem',
      fontWeight: 400,
      lineHeight: 1.17,
      padding: '24px 32px',
    },
  },
  palette: {
    text: {
      primary: '#1D558E',
      secondary: ' #92AE87',
    },
    background: {
      paper: '#FFF',
      default: '#EDF7FE',
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 16,
        },
      },
    },
  },
});
