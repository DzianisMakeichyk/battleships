import { FC } from 'react';

import { CellStyled } from './styles';

export interface CellProps {
	isHidden: boolean;
	isHit: boolean;
	isShip: boolean;
	shipId: number;
  color?: string;
	onClick: () => void;
}

const Cell: FC<CellProps> = ({ isHidden, isHit, isShip, shipId, onClick }) => {
	return <CellStyled onClick={onClick} isHidden={isHidden} isHit={isHit} isShip={isShip} shipId={shipId} />;
};

export { Cell };
