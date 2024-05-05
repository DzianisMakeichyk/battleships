import { render, fireEvent } from '@testing-library/react';

import { CoordinateInputContainer } from '../container/CoordinateInputContainer';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '../styles/Themes';

describe('Coordinate input', () => {
	test('should call onShot function with correct coordinates when form is submitted with valid input', () => {
		const onShotMock = jest.fn();
		const { getByLabelText, getByText } = render(
			<ThemeProvider theme={lightTheme}>
				<CoordinateInputContainer onShot={onShotMock} />
			</ThemeProvider>
		);

		const coordinateInput = getByLabelText('Enter coordinates:');
		const submitButton = getByText('Fire!');

		fireEvent.change(coordinateInput, { target: { value: 'A1' } });
		fireEvent.click(submitButton);

		expect(onShotMock).toHaveBeenCalledWith(0, 0);
	});

	test('should display error message when form is submitted with invalid input', () => {
		const { getByLabelText, getByText, getByTestId } = render(
			<ThemeProvider theme={lightTheme}>
				<CoordinateInputContainer />
			</ThemeProvider>
		);

		const coordinateInput = getByLabelText('Enter coordinates:');
		const submitButton = getByText('Fire!');

		fireEvent.change(coordinateInput, { target: { value: 'Z1' } });
		fireEvent.click(submitButton);

		const errorMessage = getByTestId('notification-message');
		expect(errorMessage).toHaveTextContent('Invalid coordinates! Please enter coordinates in the format "A1" to "J10".');
	});
});
