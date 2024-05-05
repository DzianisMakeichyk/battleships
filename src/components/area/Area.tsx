import { FC, Fragment } from 'react';

import { ShipProps, Ship } from '../ship';
import { Cell, CellProps } from '../cell';
import { GridContainerStyled, LabelStyled, ShipListStyled } from './styles';

interface AreaProps {
	grid: CellProps[][];
	ships: ShipProps[];
	showBattleArea?: boolean;
	onShot: (row: number, col: number) => void;
}

const Area: FC<AreaProps> = ({ grid, ships, onShot, showBattleArea = false }) => {
	const alphabet = 'ABCDEFGHIJ'.split('');

	return (
		<>
			<GridContainerStyled>
				<LabelStyled /> {/* Empty cell at the top-left corner */}
				{alphabet.map((letter, index) => (
					<LabelStyled key={index}>{letter}</LabelStyled>
				))}
				{grid.map((row, rowIndex) => (
					<Fragment key={rowIndex}>
						<LabelStyled>{rowIndex + 1}</LabelStyled>
						{row.map(({ isHit, shipId, isShip }, colIndex) => (
							<Cell
								key={`${rowIndex}-${colIndex}`}
								isHidden={!showBattleArea}
								isHit={isHit}
								shipId={shipId}
								isShip={isShip}
								onClick={() => onShot(rowIndex, colIndex)}
							/>
						))}
					</Fragment>
				))}
			</GridContainerStyled>
			<ShipListStyled>
				{ships.map((ship) => (
					<li key={ship.id}>
						<Ship {...ship} />
					</li>
				))}
			</ShipListStyled>
		</>
	);
};

export { Area };
