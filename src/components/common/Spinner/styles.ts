import styled, { css, keyframes } from 'styled-components';

const rotate = keyframes`
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
`;

export const Container = styled.div<{ scale: number }>`
  transform: ${({ scale }) => `scale(${scale})`};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Ring = styled.div<{ color: 'white' | 'blue' }>`
  display: inline-block;
  position: relative;
  width: 54px;
  height: 54px;

  & div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 40px;
    height: 40px;
    margin: 8px;
    border: 4px solid ${({ theme }) => theme.colors.blue};
    border-radius: 50%;
    animation: ${rotate} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: ${({ theme }) => theme.colors.blue} transparent transparent transparent;
  }

  & div:nth-child(1) {
    animation-delay: -0.45s;
  }

  & div:nth-child(2) {
    animation-delay: -0.3s;
  }

  & div:nth-child(3) {
    animation-delay: -0.15s;
  }

  ${({ color, theme }) =>
    color === 'white' &&
    css`
      border: 4px solid ${theme.colors.white};
      border-radius: 50%;
      animation: ${rotate} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
      border-color: ${theme.colors.white} transparent transparent transparent;
    `}
`;
