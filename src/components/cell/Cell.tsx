import { FC } from 'react';

import { CellStyled } from './styles';

export interface CellProps {
	isHidden: boolean;
	isHit: boolean;
	isShip: boolean;
	onClick: () => void;
}

const Cell: FC<CellProps> = ({ isHidden, isHit, isShip, onClick }) => {
	return <CellStyled onClick={onClick} isHidden={isHidden} isHit={isHit} isShip={isShip} />;
};

export { Cell };
