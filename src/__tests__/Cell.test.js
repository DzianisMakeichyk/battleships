import { render, fireEvent } from '@testing-library/react';
import { Cell } from '../components';

describe('Cell', () => {
	it('renders without crashing', () => {
		render(<Cell />);
	});

	it('renders with correct props', () => {
		const { getByTestId } = render(<Cell isHit={true} isShip={true} isHidden={false} shipId={1} onClick={jest.fn()} />);

		expect(getByTestId('ship-cell')).toHaveAttribute('data-ishit', 'true');
		expect(getByTestId('ship-cell')).toHaveAttribute('data-shipid', '1');
	});

	it('calls onClick when clicked', () => {
		const onClick = jest.fn();
		const { getByTestId } = render(<Cell onClick={onClick} />);

		fireEvent.click(getByTestId('ship-cell'));
		expect(onClick).toHaveBeenCalledTimes(1);
	});
});
