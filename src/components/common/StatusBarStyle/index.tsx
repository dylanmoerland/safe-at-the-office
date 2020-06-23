import React from 'react';
import { createGlobalStyle } from 'styled-components';

type StatusBarStyleProps = {
  variant?: 'blue' | 'white';
};

const Blue = createGlobalStyle`
body {
  background-color: ${({ theme }) => theme.colors.blue};
}
`;

const White = createGlobalStyle`
body {
  background-color: ${({ theme }) => theme.colors.white};
}
`;

export const StatusBarStyle: React.FC<StatusBarStyleProps> = ({ variant = 'white' }) => {
  if (variant === 'blue') return <Blue />;

  return <White />;
};
