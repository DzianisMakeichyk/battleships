import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *, html {
    scroll-behavior: smooth !important;
  }

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.3s ease;

    p,
    h1,
    h2,
    strong,
    span {
      color: ${({ theme }) => theme.text} !important;
    }

    input,
    output {
      background: ${({ theme }) => theme.body} !important;
      color: ${({ theme }) => theme.text} !important;
    }
  }

  main {
    position: relative;
    transition: height 0.3s;
  }

  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  p {
    padding: 0;
    margin: 0;
  }

  * {
    box-sizing: border-box;
  }

  .notification-enter {
  opacity: 0;
  transform: translate(-50%, -100%);
}

.notification-enter-active {
  opacity: 1;
  transform: translate(-50%, 0);
  transition: opacity 300ms, transform 300ms;
}

.notification-exit {
  opacity: 1;
  transform: translate(-50%, 0);
}

.notification-exit-active {
  opacity: 0;
  transform: translate(-50%, -100%);
  transition: opacity 300ms, transform 300ms;
}
  `;
