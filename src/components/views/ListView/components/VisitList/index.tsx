import React from 'react';
import { addDays, isSameDay } from 'date-fns';
import { useDebounce } from 'app/global/hooks/useDebounce';
import { useSearch } from 'app/global/providers/SearchProvider';
import { useAuth } from 'app/auth/providers/AuthProvider';
import { useConfig } from 'app/config/providers/ConfigProvider';
import { useSearchVisits } from 'app/visit/hooks/useSearchVisits';
import { useVisits } from 'app/visit/hooks/useVisits';
import Spinner from 'components/common/Spinner';
import { VisitDay } from '../VisitDay';
import { Container, Loading } from './styled';

const VisitList: React.FC = () => {
  const { user } = useAuth();
  const { config } = useConfig();
  const { query } = useSearch();
  const debouncedQuery = useDebounce(query, 400);
  const { visits: searchVisits, loading: searchLoading } = useSearchVisits(
    debouncedQuery.toLocaleLowerCase(),
  );
  const { visits, loading } = useVisits();

  const dates = new Array(config.daysLimit)
    .fill(new Date())
    .map((date, index) => addDays(date, index));

  if ((!debouncedQuery && loading && !visits?.length) || (!!debouncedQuery && searchLoading))
    return (
      <Loading>
        <Spinner scale={1.6} />
      </Loading>
    );

  return (
    <Container>
      {!debouncedQuery
        ? dates.map((date) => (
            <VisitDay
              key={date.toISOString()}
              date={date}
              alreadyJoined={visits.some(
                (visit) =>
                  isSameDay(date, visit?.date?.toDate()) && visit.user.uid === user.uid,
              )}
              visits={visits.filter((visit) => isSameDay(date, visit?.date?.toDate()))}
            />
          ))
        : dates
            .filter((date) =>
              searchVisits?.some((visit) => isSameDay(date, visit?.date?.toDate())),
            )
            .map((date) => (
              <VisitDay
                key={date.toISOString()}
                date={date}
                alreadyJoined={searchVisits.some(
                  (visit) =>
                    isSameDay(date, visit?.date?.toDate()) && visit.user.uid === user.uid,
                )}
                visits={visits.filter((visit) => isSameDay(date, visit?.date?.toDate()))}
              />
            ))}
    </Container>
  );
};

export default VisitList;
