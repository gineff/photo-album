import { useTheme, useMediaQuery } from '@mui/material';

export const useIsTablet = () => {
  const theme = useTheme();
  const isLgDown = useMediaQuery(theme.breakpoints.down('lg'));
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));
  return isLgDown && isMdUp;
};
