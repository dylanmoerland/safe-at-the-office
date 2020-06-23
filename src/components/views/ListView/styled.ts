import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
  height: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;
