import { FC } from 'react';

export interface ShipProps {
	id: number;
	name: string;
	length: number;
	framesHit: number;
	position: { row: number; col: number; horizontal?: boolean };
}

const Ship: FC<ShipProps> = ({ name }) => {
	return <>{name}</>;
};

export { Ship };
