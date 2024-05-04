import { FC } from 'react';

interface NotificationProps {
	message: string;
	onClose: () => void;
}

const Notification: FC<NotificationProps> = ({ message, onClose }) => {
	return (
		<>
			<p>{message}</p>
			<button onClick={onClose}>Close</button>
		</>
	);
};

export { Notification };
