import { render, fireEvent } from '@testing-library/react';

import { Button } from '../components';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '../styles/Themes';

describe('Button', () => {
	let buttonText;

	beforeEach(() => {
		buttonText = 'Click me';
	});

	test('renders button with correct text', () => {
		const { getByText } = render(
			<ThemeProvider theme={lightTheme}>
				<Button text={buttonText} onClick={() => {}} />
			</ThemeProvider>
		);
		expect(getByText(buttonText)).toBeInTheDocument();
	});

	test('calls onClick handler when button is clicked', () => {
		const onClick = jest.fn();
		const { getByText } = render(
			<ThemeProvider theme={lightTheme}>
				<Button text={buttonText} onClick={onClick} />
			</ThemeProvider>
		);
		fireEvent.click(getByText(buttonText));
		expect(onClick).toHaveBeenCalled();
	});
});
