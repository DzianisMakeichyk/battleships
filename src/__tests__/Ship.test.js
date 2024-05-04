import { render } from '@testing-library/react';
import { Ship } from '../components';

describe('Ship', () => {
	const shipProps = {
		id: 1,
		name: 'Battleship',
		length: 4,
		framesHit: 2,
		position: { row: 2, col: 3, horizontal: true },
	};

	it('renders ship component correctly', () => {
		const { getByText } = render(<Ship {...shipProps} />);
		expect(getByText(shipProps.name)).toBeInTheDocument();
	});
});
