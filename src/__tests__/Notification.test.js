import { render, screen, fireEvent } from '@testing-library/react';
import { Notification } from '../components';

describe('Notification', () => {
	test('renders message correctly', () => {
		const message = 'This is a notification message';
		render(<Notification message={message} onClose={() => {}} />);
		const messageElement = screen.getByText(message);
		expect(messageElement).toBeInTheDocument();
	});

	test('calls onClose when close button is clicked', () => {
		const onCloseMock = jest.fn();
		render(<Notification message="Test message" onClose={onCloseMock} />);
		const closeButton = screen.getByText('Close');
		fireEvent.click(closeButton);
		expect(onCloseMock).toHaveBeenCalled();
	});
});
