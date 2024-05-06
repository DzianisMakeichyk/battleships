import { render, fireEvent } from '@testing-library/react';

import { CoordinateInputContainer } from '../container/CoordinateInputContainer';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '../styles/Themes';

describe('Coordinate input', () => {
	test('should call onShot function with correct coordinates when form is submitted with valid input', () => {
		const onShotMock = jest.fn();
		const setErrorMock = jest.fn();

		const { getByLabelText, getByText } = render(
			<ThemeProvider theme={lightTheme}>
				<CoordinateInputContainer onShot={onShotMock} setError={setErrorMock} />
			</ThemeProvider>
		);

		const coordinateInput = getByLabelText('Enter coordinates:');
		const submitButton = getByText('Fire!');

		fireEvent.change(coordinateInput, { target: { value: 'A1' } });
		fireEvent.click(submitButton);

		expect(onShotMock).toHaveBeenCalledWith(0, 0);
	});

	test('should display error message when form is submitted with invalid input', () => {
		const onShotMock = jest.fn();
		const setErrorMock = jest.fn();

		const { getByLabelText, getByText } = render(
			<ThemeProvider theme={lightTheme}>
				<CoordinateInputContainer onShot={onShotMock} setError={setErrorMock} />
			</ThemeProvider>
		);
		const coordinateInput = getByLabelText('Enter coordinates:');
		const submitButton = getByText('Fire!');

		fireEvent.change(coordinateInput, { target: { value: 'Z1' } });
		fireEvent.click(submitButton);

		expect(onShotMock).not.toHaveBeenCalled();
		expect(setErrorMock).toHaveBeenCalledWith('Invalid coordinates! Please enter coordinates in the format "A1" to "J10".');
	});
});
