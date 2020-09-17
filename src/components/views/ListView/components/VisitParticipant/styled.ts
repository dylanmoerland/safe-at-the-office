import styled from 'styled-components';

export const Container = styled.div`
  margin: 24px 0;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 32px;
`;

export const Name = styled.h5`
  font-size: 1rem;
  flex: 1;
  margin: 0;
`;

export const Leave = styled.p`
  color: ${({ theme }) => theme.colors.orange};
  margin: 0;

  &:hover {
    cursor: pointer;
  }
`;
