import styled from 'styled-components';

export const GridContainerStyled = styled.div`
	display: grid;
	grid-template-columns: repeat(11, 30px);
	grid-template-rows: repeat(11, 30px);
	gap: 2px;
`;

export const LabelStyled = styled.div`
	text-align: center;
	line-height: 30px;
	font-weight: bold;
`;

export const ShipListStyled = styled.ul`
	list-style: none;
	padding-left: 35px;

	li + li {
		padding-top: 10px;
	}
`;
