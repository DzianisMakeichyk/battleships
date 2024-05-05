import { render, screen, fireEvent } from '@testing-library/react';

import { Notification } from '../components';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '../styles/Themes';

describe('Notification', () => {
	let onCloseMock;
	let message;

	beforeEach(() => {
		onCloseMock = jest.fn();
		message = 'This is a notification message';
		render(
			<ThemeProvider theme={lightTheme}>
				<Notification message={message} onClose={onCloseMock} />
			</ThemeProvider>
		);
	});

	test('renders message correctly', () => {
		const messageElement = screen.getByText(message);
		expect(messageElement).toBeInTheDocument();
	});

	test('calls onClose when close button is clicked', () => {
		const closeButton = screen.getByText('Awesome!');
		fireEvent.click(closeButton);
		expect(onCloseMock).toHaveBeenCalled();
	});
});
