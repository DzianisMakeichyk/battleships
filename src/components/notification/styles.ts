import styled from 'styled-components';
import { NotificationType } from './Notification';

interface NotificationWrapperStyledProps {
	type?: NotificationType;
}

export const NotificationWrapperStyled = styled.div<NotificationWrapperStyledProps>`
	position: absolute;
	top: 275px;
	left: calc(50% + 16px);
	transform: translateX(-50%);
	z-index: 11;
	width: 100%;
	max-width: 250px;
	background-color: ${({ theme }) => theme.notification.background};
	text-align: center;
	padding: 18px 20px;
	border-radius: 5px;
	border: ${({ theme, type }) => `1px solid ${theme[type === 'error' ? 'error' : 'body']}`};
	box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

	p {
		padding-bottom: 10px;
		font-style: italic;
	}
`;
