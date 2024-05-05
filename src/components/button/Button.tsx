import { FC } from 'react';

import { ButtonStyled } from './styles';

interface NotificationProps {
	text: string;
	onClick: () => void;
}

const Button: FC<NotificationProps> = ({ text, onClick }) => <ButtonStyled onClick={onClick}>{text}</ButtonStyled>;

export { Button };
