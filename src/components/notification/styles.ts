import styled from 'styled-components';

export const NotificationWrapperStyled = styled.div`
	position: absolute;
	top: 25px;
	left: 50%;
	transform: translateX(-50%);
	z-index: 11;
	width: 100%;
	max-width: 250px;
	background-color: ${({ theme }) => theme.notification.background};
	text-align: center;
	padding: 18px 20px;
	border-radius: 5px;
	box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

	p {
		padding-bottom: 10px;
		font-style: italic;
	}
`;
