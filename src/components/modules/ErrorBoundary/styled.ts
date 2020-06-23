import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex: 1;
  background-color: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.white};
  padding: 0 32px;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const Title = styled.h1`
  margin-top: 64px;
  margin-bottom: 128px;
  font-size: 3.2rem;

  span {
    margin-left: 32px;
  }
`;

export const Button = styled.button`
  transition: opacity 0.3s ease;
  border: 0px;
  outline: none;
  padding: 12px 8px;
  border-radius: 16px;
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.fonts.primary};
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.text.primary};

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.6;
    `}
`;
