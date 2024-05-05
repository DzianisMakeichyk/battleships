import { FC } from 'react';

import { ShipStyled } from './styles';

export interface ShipProps {
	id: number;
	name: string;
	length: number;
	framesHit: number;
	position: { row: number; col: number; horizontal?: boolean };
}

const Ship: FC<ShipProps> = ({ name, length, framesHit }) => {
	return (
		<ShipStyled $isHited={length === framesHit}>
			<strong>{name}</strong> -{' '}
			<i>
				({length}/{framesHit})
			</i>
		</ShipStyled>
	);
};

export { Ship };
