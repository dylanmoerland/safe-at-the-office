import React from 'react';
import SearchProvider from 'app/global/providers/SearchProvider';
import { HeaderBar } from 'components/modules/HeadeBar';

import { Container, Wrapper } from './styled';
import VisitList from './components/VisitList';

const ListView: React.FC = () => (
  <SearchProvider>
    <Container>
      <HeaderBar />
      <Wrapper>
        <VisitList />
      </Wrapper>
    </Container>
  </SearchProvider>
);

export default ListView;
