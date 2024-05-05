import { ChangeEvent, FC, FormEvent, useState } from 'react';

import { CoordinateForm, Notification } from '../components';

interface CoordinateInputProps {
	onShot: (row: number, col: number) => void;
}

const CoordinateInputContainer: FC<CoordinateInputProps> = ({ onShot }) => {
	const [coordinateInput, setCoordinateInput] = useState('');
	const [error, setError] = useState<string>('');

	const handleCoordinateChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
		setCoordinateInput(target.value);
		setError('');
	};

	const handleCloseNotification = () => {
		setError('');
	};

	const handleCoordinateSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const colLetter = coordinateInput.charAt(0).toUpperCase(); // Extract first character for column
		const rowString = coordinateInput.substring(1); // Extract the rest for row

		// Check if the row string is '10' or a single digit
		if (/^[A-J]$/.test(colLetter) && (rowString === '10' || /^[1-9]$/.test(rowString))) {
			const colIndex = colLetter.charCodeAt(0) - 65;
			const rowIndex = parseInt(rowString, 10) - 1;
			onShot(rowIndex, colIndex);
			setCoordinateInput('');
		} else {
			setError('Invalid coordinates! Please enter coordinates in the format "A1" to "J10".');
		}
	};

	return (
		<>
			<CoordinateForm
				coordinateInput={coordinateInput}
				onCoordinateChange={handleCoordinateChange}
				onCoordinateSubmit={handleCoordinateSubmit}
			/>

			<Notification message={error} onClose={handleCloseNotification} type="error" closeButton="Ok" timer={10000} />
		</>
	);
};

export { CoordinateInputContainer };
