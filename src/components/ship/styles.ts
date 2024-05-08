import styled from 'styled-components';

interface ShipStyledProps {
	$isHited: boolean;
	$isWounded: boolean;
}

export const ShipStyled = styled.div<ShipStyledProps>`
	position: relative;
	padding-left: 25px;

	&::before {
		content: '';
		position: absolute;
		border-radius: 50%;
		top: 2px;
		left: 0;
		width: 15px;
		height: 15px;
		z-index: 1;
		background-color: ${({ $isHited, $isWounded, theme }) =>
			$isHited ? theme.ship.hited : $isWounded ? theme.ship.wounded : theme.ship.missted};

		border: 1px solid ${({ theme }) => theme.button.border};
		transition:
			background-color 0.5s ease,
			opacity 0.5s ease;
	}
`;
