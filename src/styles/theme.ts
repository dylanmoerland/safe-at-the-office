export const theme = {
  colors: {
    blue: '#0400ad',
    white: '#FFFFFF',
    green: '#00a912',
    yellow: '#fcd242',
    orange: '#ff8b14',
    text: {
      primary: '#1c1c1c',
      secondary: '#a0a0a0',
    },
  },
  fonts: {
    primary: 'Poppins',
    secondary: 'Raleway',
  },
};

export type Theme = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {} // eslint-disable-line
}
