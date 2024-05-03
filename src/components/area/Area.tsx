import React from 'react';
import styled from 'styled-components';

import { ShipProps, Ship } from '../ship';
import { Cell, CellProps } from '../cell';

interface AreaProps {
	grid: CellProps[][];
	shipPopUp: boolean;
	shipKillNotification: string | null;
	ships: ShipProps[];
	onShot: (row: number, col: number) => void;
	onClosePopUp: () => void;
	onCloseNotification: () => void;
}

const GridContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(10, 30px);
	grid-template-rows: repeat(10, 30px);
	gap: 2px;
`;

const Area: React.FC<AreaProps> = ({ grid, shipPopUp, shipKillNotification, ships, onShot, onClosePopUp, onCloseNotification }) => {
	return (
		<div>
			{shipPopUp && (
				<div>
					<h3>You hit a ship!</h3>
					<button onClick={onClosePopUp}>Close</button>
				</div>
			)}
			{shipKillNotification && (
				<div>
					<h3>{shipKillNotification}</h3>
					<button onClick={onCloseNotification}>Close</button>
				</div>
			)}
			<GridContainer>
				{grid.map((row, rowIndex) =>
					row.map((cell, colIndex) => (
						<Cell
							key={`${rowIndex}-${colIndex}`}
							isHidden={!cell.isHit}
							isHit={cell.isHit}
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
