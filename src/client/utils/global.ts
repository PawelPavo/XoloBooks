import { createGlobalStyle } from 'styled-components';
declare module 'styled-components' {
    export interface DefaultTheme {
        primaryDark?: string;
        primaryLight?: string;
        mobile?: any;
        primaryHover?: any;
    }
}

export const GlobalStyles = createGlobalStyle`

    html, body {
        margin: 0;
        padding: 0;
    }
  *, *::after, *::before {
    box-sizing: border-box;
  }
  body {
    background: ${({ theme }) => theme.primaryDark};
    color: ${({ theme }) => theme.primaryLight};
    display: flex;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    justify-content: center;
  }
  `