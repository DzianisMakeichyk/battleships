import styled from 'styled-components';
import { CellProps } from './Cell';

export const CellStyled = styled.div<CellProps>`
	width: 30px;
	height: 30px;
	background-color: ${({ isHit, isShip }) => (isHit ? (isShip ? 'blue' : 'red') : 'gray')};
`;
