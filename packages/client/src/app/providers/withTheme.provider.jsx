import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { theme } from '../theme';

/**
 * Провайдер оборачивает приложение в mui Theme.
 * */

export const withTheme = (Component) => {
  const WrappedComponent = (props) => (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...props} />
    </ThemeProvider>
  );

  WrappedComponent.displayName = `withTheme(${Component.displayName || Component.name || 'Component'})`;

  return WrappedComponent;
};
