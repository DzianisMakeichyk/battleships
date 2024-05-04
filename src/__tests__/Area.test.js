import { render, fireEvent } from '@testing-library/react';
import { AreaContainer } from '../container/AreaContainer';

describe('Area', () => {
	let getAllByTestId;
	let shipCells;

	beforeEach(() => {
		const result = render(<AreaContainer />);
		getAllByTestId = result.getAllByTestId;
		shipCells = getAllByTestId('ship-cell');
	});

	test('renders without crashing & places ships on initialization', () => {
		// No need to do anything in this test because the component is already rendered in beforeEach

		expect(shipCells.length).toBeGreaterThan(0);
		shipCells.forEach((cell) => {
			expect(cell).toBeInTheDocument();
		});
	});

	test('hits a ship correctly', () => {
		const shipCell = shipCells.find((cell) => cell.getAttribute('data-shipid') >= 1);

		if (shipCell) {
			fireEvent.click(shipCell);
			expect(shipCell.getAttribute('data-ishit')).toBe('true');
		} else {
			throw new Error('No ship cell found');
		}
	});
});
