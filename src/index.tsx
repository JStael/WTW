import React from 'react';
import { ThemeProvider } from 'styled-components';
import { AppRoutes } from './routes';
import { colors, typography, spacing } from './theme';
import { ThemeType } from './utils/types/styled';

const theme: ThemeType = {
  ...colors,
  ...typography,
  ...spacing,
};

const App = (): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <AppRoutes />
    </ThemeProvider>
  );
};

export default App;
