import { FC, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

import { NotificationWrapperStyled } from './styles';
import { Button } from '../button';

interface NotificationProps {
	message: string | null;
	timer?: number;
	onClose: () => void;
}

const Notification: FC<NotificationProps> = ({ message, onClose, timer = 2000000 }) => {
	const notificationRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (notificationRef.current && !notificationRef.current.contains(event.target as Node)) {
				onClose();
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [onClose]);

	useEffect(() => {
		const autoCloseTimer = setTimeout(() => {
			onClose();
		}, timer);

		return () => {
			clearTimeout(autoCloseTimer);
		};
	}, [message, onClose, timer]);

	return (
		<CSSTransition in={!!message} timeout={300} classNames="notification" unmountOnExit>
			<NotificationWrapperStyled ref={notificationRef}>
				<p>{message}</p>
				<Button onClick={onClose} text="Awesome!" />
			</NotificationWrapperStyled>
		</CSSTransition>
	);
};

export { Notification };
