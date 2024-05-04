import { FC } from 'react';
import styled from 'styled-components';

import { ShipProps, Ship } from '../ship';
import { Cell, CellProps } from '../cell';

interface AreaProps {
	grid: CellProps[][];
	ships: ShipProps[];
	showBattleArea?: boolean;
	onShot: (row: number, col: number) => void;
}

const GridContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(10, 30px);
	grid-template-rows: repeat(10, 30px);
	gap: 2px;
`;

const Area: FC<AreaProps> = ({ grid, ships, onShot, showBattleArea = false }) => {
	return (
		<>
			<GridContainer>
				{grid.map((row, rowIndex) =>
					row.map(({ isHit, shipId, isShip }, colIndex) => (
						<Cell
							key={`${rowIndex}-${colIndex}`}
							isHidden={!showBattleArea}
							isHit={isHit}
							shipId={shipId}
							isShip={isShip}
							onClick={() => onShot(rowIndex, colIndex)}
						/>
					))
				)}
			</GridContainer>
			<div>
				{ships.map((ship) => (
					<Ship key={ship.id} {...ship} />
				))}
			</div>
		</>
	);
};

export { Area };
