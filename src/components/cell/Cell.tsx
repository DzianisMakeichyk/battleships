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

const Cell: FC<CellProps> = ({ ...rest }) => {
	return <CellStyled {...rest} />;
};

export { Cell };
