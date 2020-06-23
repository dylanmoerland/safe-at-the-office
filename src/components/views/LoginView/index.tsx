import React from 'react';
import firebase from 'firebase/app';
import { auth } from 'app/global/firebase';
import { useAuth } from 'app/auth/providers/AuthProvider';
import Spinner from 'components/common/Spinner';
import { Container, Wrapper, Title, Button, Loading } from './styled';

const provider = new firebase.auth.GoogleAuthProvider();

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
            Login with google
          </Button>
        ) : (
          <Loading>
            <Spinner scale={1.6} color="white" />
          </Loading>
        )}
      </Wrapper>
    </Container>
  );
};

export default LoginView;
