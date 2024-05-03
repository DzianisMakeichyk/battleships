import React from 'react';
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

const Area: React.FC<AreaProps> = ({ grid, ships, onShot, showBattleArea = false }) => {
	return (
		<div>
			<GridContainer>
				{grid.map((row, rowIndex) =>
					row.map((cell, colIndex) => (
						<Cell
							key={`${rowIndex}-${colIndex}`}
              isHidden={!showBattleArea}
							isHit={cell.isHit}
							shipId={cell.shipId}
							isShip={cell.isShip}
							onClick={() => onShot(rowIndex, colIndex)}
						/>
					))
				)}
			</GridContainer>
			<div>
				{ships.map((ship) => (
					<Ship key={ship.id} ship={ship} />
				))}
			</div>
		</div>
	);
};

export { Area };
