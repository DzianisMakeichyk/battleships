import { FC } from 'react';

interface NotificationProps {
	message: string;
	onClose: () => void;
}

const Notification: FC<NotificationProps> = ({ message, onClose }) => {
	return (
		<div>
			<p>{message}</p>
			<button onClick={onClose}>Close</button>
		</div>
	);
};

export { Notification };
