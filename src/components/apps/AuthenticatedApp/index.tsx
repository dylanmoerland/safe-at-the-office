import React from 'react';
import { useAuth } from 'app/auth/providers/AuthProvider';
import { useConfig } from 'app/config/providers/ConfigProvider';
import NotAllowedView from 'components/views/NotAllowedView';
import ListView from 'components/views/ListView';
import { Overlay, Content } from './styled';

const AuthenticatedApp: React.FC = () => {
  const { isAllowed, loading } = useAuth();
  const { loading: loadingConfig } = useConfig();

  if (loading || loadingConfig) return <Overlay />;

  if (!isAllowed) return <NotAllowedView />;

  return (
    <>
      <Overlay animate />
      <Content>
        <ListView />
      </Content>
    </>
  );
};

export default AuthenticatedApp;
