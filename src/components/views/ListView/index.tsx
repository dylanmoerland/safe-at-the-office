import React from 'react';
import SearchProvider from 'app/global/providers/SearchProvider';
import { useIsHidden } from 'app/global/hooks/useIsHidden';
import { HeaderBar } from 'components/modules/HeadeBar';
import { Container, Wrapper } from './styled';
import VisitList from './components/VisitList';

const ListView: React.FC = () => {
  const hidden = useIsHidden();

  return (
    <SearchProvider>
      <Container>
        <HeaderBar />
        <Wrapper>{!hidden && <VisitList />}</Wrapper>
      </Container>
    </SearchProvider>
  );
};

export default ListView;
