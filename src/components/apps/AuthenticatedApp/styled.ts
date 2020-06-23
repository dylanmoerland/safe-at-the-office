import styled, { css, keyframes } from 'styled-components';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

export const Overlay = styled.div<{ animate?: boolean }>`
  pointer-events: none;
  position: fixed;
  z-index: 9999;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.blue};

  ${({ animate }) =>
    animate &&
    css`
      animation: ${fadeOut} 0.5s 0.5s forwards;
    `}
`;

export const Content = styled.div`
  animation: ${fadeIn} 1.5s forwards;
  flex: 1;
`;
