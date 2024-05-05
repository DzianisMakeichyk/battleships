import { render } from '@testing-library/react';

import { Ship } from '../components';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '../styles/Themes';

describe('Ship', () => {
	const shipProps = {
		id: 1,
		name: 'Battleship',
		length: 4,
		framesHit: 2,
		position: { row: 2, col: 3, horizontal: true },
	};

	test('renders ship component correctly', () => {
		const { getByText } = render(
			<ThemeProvider theme={lightTheme}>
				<Ship {...shipProps} />
			</ThemeProvider>
		);
		expect(getByText(shipProps.name)).toBeInTheDocument();
	});
});
