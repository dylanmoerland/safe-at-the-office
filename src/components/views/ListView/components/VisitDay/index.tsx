import React, { useCallback, useState } from 'react';
import { format } from 'date-fns';
import { firestore } from 'app/global/firebase';
import { useAuth } from 'app/auth/providers/AuthProvider';
import { useConfig } from 'app/config/providers/ConfigProvider';
import { Visit } from 'app/visit/types';
import { VisitParticipant } from '../VisitParticipant';
import {
  Container,
  Wrapper,
  DayLabel,
  Participants,
  NoPeople,
  Join,
  ImIn,
  Full,
} from './styled';

type VisitDayProps = {
  date: Date;
  visits?: Visit[];
  alreadyJoined: boolean;
};

export const VisitDay: React.FC<VisitDayProps> = ({ date, visits = [], alreadyJoined }) => {
  const { user } = useAuth();
  const { config } = useConfig();
  const [loading, setLoading] = useState(false);

  const addMe = useCallback(() => {
    setLoading(true);
    firestore
      .collection('visit')
      .add({
        user,
        date,
      })
      .finally(() => setLoading(false));
  }, [user, date]);

  const leave = useCallback((id: string) => {
    firestore.collection('visit').doc(id).delete();
  }, []);

  return (
    <Container>
      <Wrapper>
        <DayLabel>{format(date, 'EEEE d MMM yyy')}</DayLabel>
        <Participants>
          {visits.length ? (
            visits.map((visit) => (
              <VisitParticipant
                key={visit.id}
                participant={visit.user}
                leave={() => leave(visit.id)}
              />
            ))
          ) : (
            <NoPeople>
              No one yet! Be the first and inspire more to join!{' '}
              <span role="img" aria-label="kiss">
                😘
              </span>
            </NoPeople>
          )}
        </Participants>
        {alreadyJoined ? (
          <ImIn disabled>I&apos;m in!</ImIn>
        ) : visits.length < config.peopleLimit ? (
          <Join onClick={addMe} disabled={loading}>
            + Count me in!
          </Join>
        ) : (
          <Full disabled>Better luck next time!</Full>
        )}
      </Wrapper>
    </Container>
  );
};
