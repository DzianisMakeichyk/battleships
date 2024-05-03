import { FC } from 'react';

export interface ShipProps {
	id: number;
	name: string;
	length: number;
	framesHit: number;
}

const Ship: FC<{ ship: ShipProps }> = ({ ship }) => {
	return <div>{ship.name}</div>;
};

export { Ship };
