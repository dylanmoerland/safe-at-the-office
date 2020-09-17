import styled from 'styled-components';

export const Container = styled.div`
  margin: 24px 0 32px 0;
`;

export const Wrapper = styled.div``;

export const DayLabel = styled.h5`
  color: ${({ theme }) => theme.colors.blue};
  font-size: 1.2rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.text.secondary};
  padding: 0 32px;
  margin: 0;
`;

export const Participants = styled.div``;

export const Join = styled.button`
  margin: 0 32px;
  border: none;
  background-color: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.white};
  padding: 6px 8px;
  border-radius: 12px;

  &:hover {
    cursor: pointer;
  }
`;

export const ImIn = styled(Join)`
  background-color: ${({ theme }) => theme.colors.green};
`;

export const Full = styled(Join)`
  background-color: ${({ theme }) => theme.colors.orange};
`;

export const NoPeople = styled.p`
  margin: 16px 32px;
  font-size: 1rem;
`;
