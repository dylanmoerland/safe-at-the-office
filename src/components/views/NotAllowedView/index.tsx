import React from 'react';
import { auth } from 'app/global/firebase';
import { useAuth } from 'app/auth/providers/AuthProvider';
import { Container, Wrapper, Title, Button } from './styled';

const NotAllowedView: React.FC = () => {
  const { loading } = useAuth();

  return (
    <Container>
      {!loading && (
        <Wrapper>
          <Title>
            This is <br />
            <span>
              not for
              <br />
            </span>
            <span>
              <span>you :)</span>
            </span>
          </Title>
          <Button onClick={() => auth.signOut()}>Logout</Button>
        </Wrapper>
      )}
    </Container>
  );
};

export default NotAllowedView;
