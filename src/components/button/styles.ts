import styled from 'styled-components';

export const ButtonStyled = styled.button`
	letter-spacing: 1px;
	padding: 9px 18px;
	outline: 0;
	border: 1px solid ${({ theme }) => theme.button.border};
	cursor: pointer;
	position: relative;
	background-color: transparent;
	user-select: none;
	border-radius: 5px;

	&:after {
		content: '';
		background-color: ${({ theme }) => theme.button.background};
		width: 100%;
		z-index: -1;
		position: absolute;
		height: 100%;
		bottom: 5px;
		left: 5px;
		transition:
			bottom 0.2s ease,
			left 0.2s ease;
		border-radius: 5px;
	}

	&:hover:after {
		bottom: 0px;
		left: 0px;
	}
`;
