import styled from 'styled-components';

interface ShipStyledProps {
	$isHited: boolean;
}

export const ShipStyled = styled.div<ShipStyledProps>`
	position: relative;
	padding-left: 25px;

	&::before {
		content: '';
		position: absolute;
		width: 15px;
		height: 15px;
		border-radius: 50%;
		top: 2px;
		left: 0;
		z-index: 1;
		background-color: ${({ $isHited, theme }) => ($isHited ? theme.ship.hited : theme.ship.missted)};
		transition:
			background-color 0.5s,
			opacity 0.5s;
	}
`;
