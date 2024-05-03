import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from './styles/globalStyles';
import { lightTheme, darkTheme } from './styles/Themes';

function App() {
  const [themeName, setThemeName] = useState('light');

  const themeToggler = () => setThemeName(themeName === 'light' ? 'dark' : 'light');
	const theme = themeName === 'light' ? lightTheme : darkTheme;

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <header className="App-header">
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
        </header>
      </ThemeProvider>
    </div>
  );
}

export default App;
