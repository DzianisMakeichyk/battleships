import styled from 'styled-components';

interface CellStyledProps {
	$isHit: boolean;
	$isShip: boolean;
	$isHidden?: boolean;
}

export const CellStyled = styled.div<CellStyledProps>`
	width: 30px;
	height: 30px;
	background-color: ${({ $isHit, $isShip, $isHidden }) => ($isHidden ? ($isHit ? ($isShip ? 'blue' : 'red') : 'gray') : $isShip ? 'blue' : 'gray')};
`;
