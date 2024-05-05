import { FC } from 'react';

import { ButtonStyled } from './styles';

interface NotificationProps {
	text: string;
	onClick?: () => void;
	type?: 'button' | 'submit' | 'reset';
}

const Button: FC<NotificationProps> = ({ text, onClick, ...rest }) => (
	<ButtonStyled onClick={onClick} {...rest}>
		{text}
	</ButtonStyled>
);

export { Button };
