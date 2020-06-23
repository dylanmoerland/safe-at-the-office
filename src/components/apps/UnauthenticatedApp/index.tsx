import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router';

const LoginView = lazy(() => import('components/views/LoginView'));

const UnauthenticatedApp: React.FC = () => {
  return (
    <Suspense fallback={null}>
      <Switch>
        <Route path={['/', '/auth/signin']} component={LoginView} />
      </Switch>
    </Suspense>
  );
};

export default UnauthenticatedApp;
