import React from 'react';
import { User } from 'app/auth/types';
import { useAuth } from 'app/auth/providers/AuthProvider';
import { Container, Wrapper, Avatar, Name, Leave } from './styled';

type VisitParticipantProps = {
  participant: User;
  leave: () => void;
};

export const VisitParticipant: React.FC<VisitParticipantProps> = ({ participant, leave }) => {
  const { user } = useAuth();

  return (
    <Container>
      <Wrapper>
        <Avatar image={participant.image || ''} />
        <div>
          <Name>{participant.name}</Name>
          {user.uid === participant.uid && <Leave onClick={leave}>leave</Leave>}
        </div>
      </Wrapper>
    </Container>
  );
};
