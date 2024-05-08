// CoordinateFormStyles.tsx
import styled from 'styled-components';

export const FormStyled = styled.form`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	gap: 10px;
	padding: 20px;
	border: ${({ theme }) => `1px solid ${theme.form.border}`};
	border-radius: 5px;
`;

export const LabelStyled = styled.label`
	/* font-size: 1.2em; */
`;

export const InputStyled = styled.input`
	padding: 10px;
	border-radius: 5px;
	border: ${({ theme }) => `1px solid ${theme.form.border}`};

	&::placeholder {
		font-style: italic;
	}
`;
