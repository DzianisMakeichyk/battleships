import { FC } from 'react';

import { CellStyled } from './styles';

export interface CellProps {
	isHit: boolean;
	isHidden?: boolean;
	isShip: boolean;
	shipId: number;
	color?: string;
	onClick: () => void;
}

const Cell: FC<CellProps> = ({ isHit, isShip, isHidden, shipId, onClick }) => {
	return (
		<CellStyled
			$isHit={isHit}
			$isShip={isShip}
			$isHidden={isHidden}
			onClick={onClick}
			data-testid="ship-cell"
			data-shipid={shipId}
			data-ishit={isHit}
		/>
	);
};

export { Cell };
