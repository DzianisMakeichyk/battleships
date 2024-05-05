import styled from 'styled-components';

export const ButtonStyled = styled.button`
	background-color: ${({ theme }) => theme.button.background};
	color: ${({ theme }) => theme.button.color};
	border: none;
	padding: 5px 10px;
	border-radius: 5px;
	cursor: pointer;
	margin-top: 10px;
	transition: transform 0.2s ease;

	&:hover {
		transform: scale(1.05);
	}
`;
