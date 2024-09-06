import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    line-height: 1.6;
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  a {
    color: ${({ theme }) => theme.primary};
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.secondary};
    }
  }

  h1, h2, h3, h4, h5, h6 {
    margin-bottom: 1.5rem;
    color: ${({ theme }) => theme.headings};
    font-weight: 700;
    line-height: 1.2;
  }

  section {
    padding: 6rem 0;
  }

  .container {
    max-width: 1200px;
    width: 90%;
    margin: 0 auto;
  }

  .btn {
    display: inline-block;
    padding: 0.8rem 1.8rem;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.background};
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    transition: all 0.3s ease;
    border: none;
    cursor: pointer;

    &:hover {
      background-color: ${({ theme }) => theme.hoverBackground};
      color: ${({ theme }) => theme.hoverText};
      transform: translateY(-3px);
      box-shadow: 0 4px 10px ${({ theme }) => theme.shadow};
    }

    &:active {
      transform: translateY(-1px);
    }
  }
`;

export default GlobalStyle;

export const mintFreshTheme = {
  name: 'mintFresh',
  background: '#f0fff4',
  text: '#2d3748',
  headings: '#234e52',
  primary: '#38b2ac',
  secondary: '#319795',
  accent: '#f6ad55',
  cardBackground: '#ffffff',
  border: '#e6fffa',
  shadow: 'rgba(56, 178, 172, 0.1)',
  success: '#68d391',
  warning: '#f6ad55',
  error: '#fc8181',
  hoverBackground: '#2c8f8a',
  hoverText: '#ffffff',
};

export const stylishTheme = {
  name: 'stylish',
  background: '#1c1c2e',
  text: '#e0e0e0',
  headings: '#ffffff',
  primary: '#bb86fc',
  secondary: '#03dac6',
  accent: '#ff79c6',
  cardBackground: '#2d2d44',
  border: '#3f3f5f',
  shadow: 'rgba(187, 134, 252, 0.2)',
  success: '#50fa7b',
  warning: '#f1fa8c',
  error: '#ff5555',
  hoverBackground: '#9965d4',
  hoverText: '#ffffff',
};

export const sunsetVibesTheme = {
  name: 'sunsetVibes',
  background: '#fffaf0',
  text: '#4a5568',
  headings: '#744210',
  primary: '#ed8936',
  secondary: '#dd6b20',
  accent: '#5a67d8',
  cardBackground: '#fff',
  border: '#feebc8',
  shadow: 'rgba(237, 137, 54, 0.2)',
  success: '#68d391',
  warning: '#f6ad55',
  error: '#fc8181',
  hoverBackground: '#c76a23',
  hoverText: '#ffffff',
};

export const midnightBlackTheme = {
  name: 'midnightBlack',
  background: '#000000',
  text: '#ffffff',
  headings: '#f0f0f0',
  primary: '#1e90ff',
  secondary: '#00bfff',
  accent: '#ff1493',
  cardBackground: '#111111',
  border: '#333333',
  shadow: 'rgba(30, 144, 255, 0.2)',
  success: '#00ff00',
  warning: '#ffd700',
  error: '#ff0000',
  hoverBackground: '#0066cc',
  hoverText: '#ffffff',
};

export const cleanMinimalistTheme = {
  name: 'cleanMinimalist',
  background: '#ffffff',
  text: '#333333',
  headings: '#000000',
  primary: '#4a90e2',
  secondary: '#50e3c2',
  accent: '#f5a623',
  cardBackground: '#f9f9f9',
  border: '#e0e0e0',
  shadow: 'rgba(0, 0, 0, 0.05)',
  success: '#7ed321',
  warning: '#f8e71c',
  error: '#d0021b',
  hoverBackground: '#3a7bc2',
  hoverText: '#ffffff',
};