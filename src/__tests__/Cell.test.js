import { render, fireEvent } from '@testing-library/react';

import { Cell } from '../components';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '../styles/Themes';

describe('Cell', () => {
	test('renders without crashing', () => {
		render(
			<ThemeProvider theme={lightTheme}>
				<Cell />
			</ThemeProvider>
		);
	});

	test('renders with correct props', () => {
		const { getByTestId } = render(
			<ThemeProvider theme={lightTheme}>
				<Cell isHit={true} isShip={true} isHidden={false} shipId={1} onClick={jest.fn()} />
			</ThemeProvider>
		);

		expect(getByTestId('ship-cell')).toHaveAttribute('data-ishit', 'true');
		expect(getByTestId('ship-cell')).toHaveAttribute('data-shipid', '1');
	});

	test('calls onClick when clicked', () => {
		const onClick = jest.fn();
		const { getByTestId } = render(
			<ThemeProvider theme={lightTheme}>
				<Cell onClick={onClick} />
			</ThemeProvider>
		);

		fireEvent.click(getByTestId('ship-cell'));
		expect(onClick).toHaveBeenCalledTimes(1);
	});
});
