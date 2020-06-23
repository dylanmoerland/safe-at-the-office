import React, { Suspense, lazy } from 'react';
import { Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { useAuth } from 'app/auth/providers/AuthProvider';
import { history } from 'app/global/history';
import { theme } from 'styles/theme';
import GlobalStyle from 'styles';

const AuthenticatedApp = lazy(() => import('components/apps/AuthenticatedApp'));
const UnauthenticatedApp = lazy(() => import('components/apps/UnauthenticatedApp'));

const App: React.FC = () => {
  const { user } = useAuth();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router history={history}>
        <Suspense fallback={null}>
          {user?.uid ? <AuthenticatedApp /> : <UnauthenticatedApp />}
        </Suspense>
      </Router>
    </ThemeProvider>
  );
};
export default App;
