// import React, { createContext, useState, useContext } from 'react';
// import { ThemeProvider as StyledThemeProvider } from 'styled-components';
// import { lightTheme, darkTheme, neonCyberpunkTheme, GlobalStyle } from '../styles/theme';

// const ThemeContext = createContext();

// export const ThemeProvider = ({ children }) => {
//   const [theme, setTheme] = useState(lightTheme);

//   const toggleTheme = (themeName) => {
//     switch (themeName) {
//       case 'light':
//         setTheme(lightTheme);
//         break;
//       case 'dark':
//         setTheme(darkTheme);
//         break;
//       case 'neonCyberpunk':
//         setTheme(neonCyberpunkTheme);
//         break;
//       default:
//         setTheme(lightTheme);
//     }
//   };

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       <StyledThemeProvider theme={theme}>
//         <GlobalStyle />
//         {children}
//       </StyledThemeProvider>
//     </ThemeContext.Provider>
//   );
// };

// export const useTheme = () => useContext(ThemeContext);