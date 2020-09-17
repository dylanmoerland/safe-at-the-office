import React from 'react';
import { auth } from 'app/global/firebase';
import { useAuth } from 'app/auth/providers/AuthProvider';
import Spinner from 'components/common/Spinner';
import { Container, Wrapper, Title, Button, Loading, Company } from './styled';
import { getAuthProvider } from 'app/auth/providers/getAuthProvider';

const provider = getAuthProvider();

const LoginView: React.FC = () => {
  const { loading } = useAuth();

  return (
    <Container>
      <Wrapper>
        <Title>
          Safe at <br /> <span>the office</span>
        </Title>
        {!loading ? (
          <Button onClick={() => auth.signInWithRedirect(provider)} disabled={loading}>
            Login with {process.env.REACT_APP_AUTH_PROVIDER}
          </Button>
        ) : (
          <Loading>
            <Spinner scale={1.6} color="white" />
          </Loading>
        )}
      </Wrapper>
      {process.env.REACT_APP_COMPANY_NAME && (
        <Company>{process.env.REACT_APP_COMPANY_NAME}</Company>
      )}
    </Container>
  );
};

export default LoginView;
