import styled from 'styled-components';

interface CellStyledProps {
	$isHit: boolean;
	$isShip: boolean;
	$isHidden?: boolean;
}

export const CellStyled = styled.div<CellStyledProps>`
	width: 30px;
	height: 30px;
	border-radius: 3px;
	background-color: ${({ theme }) => theme.cell};
	position: relative;
	cursor: pointer;

	&::before {
		content: '';
		position: absolute;
		top: 50%;
		left: 50%;
		width: 17px;
		height: 17px;
		transform: translate(-50%, -50%);
		border-radius: 50%;
		transition: background-color 0.2s ease;
		animation: ${({ $isHit, $isShip }) => ($isHit && $isShip ? 'hit 0.5s ease' : 'none')};
		background-color: ${({ $isHit, $isShip, $isHidden, theme }) =>
			$isHidden ? ($isHit ? ($isShip ? theme.ship.hited : theme.ship.missted) : theme.cell) : $isShip ? theme.ship.missted : theme.cell};
	}

	&:hover::after {
		content: '';
		position: absolute;
		top: 50%;
		left: 50%;
		width: 6px;
		height: 6px;
		z-index: ${({ $isHit }) => ($isHit ? -1 : 10)};
		transform: translate(-50%, -50%);
		border-radius: 50%;
		background-color: ${({ theme }) => theme.ship.missted};
		animation: pulse 2s infinite;
	}

	@keyframes pulse {
		0% {
			transform: translate(-50%, -50%) scale(1);
			opacity: 1;
		}
		70% {
			transform: translate(-50%, -50%) scale(1.5);
			opacity: 0.7;
		}
		100% {
			transform: translate(-50%, -50%) scale(1);
			opacity: 1;
		}
	}

	@keyframes hit {
		0% {
			transform: translate(-50%, -50%) scale(1);
		}
		50% {
			transform: translate(-50%, -50%) scale(1.2);
		}
		75% {
			transform: translate(-50%, -50%) scale(0.8);
		}
		100% {
			transform: translate(-50%, -50%) scale(1);
		}
	}
`;
