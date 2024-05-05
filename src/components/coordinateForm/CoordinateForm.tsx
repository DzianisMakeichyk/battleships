import { ChangeEvent, FormEvent, FC } from 'react';

import { FormStyled, LabelStyled, InputStyled } from './styles';
import { Button } from '../button';

interface CoordinateFormProps {
	coordinateInput: string;
	onCoordinateChange: (event: ChangeEvent<HTMLInputElement>) => void;
	onCoordinateSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

const CoordinateForm: FC<CoordinateFormProps> = ({ coordinateInput, onCoordinateChange, onCoordinateSubmit }) => {
	return (
		<FormStyled onSubmit={onCoordinateSubmit}>
			<LabelStyled htmlFor="coordinateInput">Enter coordinates:</LabelStyled>
			<InputStyled type="text" id="coordinateInput" value={coordinateInput.toUpperCase()} onChange={onCoordinateChange} placeholder="e.g. A1" />
			<Button type="submit" text="Fire!" />
		</FormStyled>
	);
};

export { CoordinateForm };
