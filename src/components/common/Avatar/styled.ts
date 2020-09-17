import styled from 'styled-components';

export const Image = styled.div<{ image: string }>`
  width: 48px;
  height: 48px;
  border-radius: 48px;
  background-image: url(${({ image }) => image});
  background-size: cover;
  background-position: center center;
  margin-right: 16px;
`;

export const Fallback = styled.div<{ color: string }>`
  width: 48px;
  height: 48px;
  border-radius: 48px;
  font-size: 18px;
  background-color: ${({ color }) => color};
  margin-right: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
`;
