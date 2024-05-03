import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from './styles/globalStyles';
import { lightTheme, darkTheme } from './styles/Themes';
import { AreaContainer } from './container/AreaContainer';

function App() {
	const [themeName, setThemeName] = useState('light');

	const themeToggler = () => setThemeName(themeName === 'light' ? 'dark' : 'light');
	const theme = themeName === 'light' ? lightTheme : darkTheme;

	return (
		<div className="App">
			<ThemeProvider theme={theme}>
				<GlobalStyles />
				<main>
					<AreaContainer />
				</main>
			</ThemeProvider>
		</div>
	);
}

export default App;
