import React, { useState, useEffect, useRef } from 'react';

import { Area, ShipProps, CellProps, Notification } from '../components';

type Grid = CellProps[][];

const initialGrid: Grid = Array.from({ length: 10 }, () =>
	Array.from({ length: 10 }, () => ({
		isHit: false,
		isShip: false,
		shipId: 0,
		onClick: () => {},
	}))
);

const ships: ShipProps[] = [
	{ id: 1, name: 'Battleship 1', length: 5, framesHit: 0, position: { row: 0, col: 0 } },
	{ id: 2, name: 'Battleship 2', length: 4, framesHit: 0, position: { row: 0, col: 0 } },
	{ id: 3, name: 'Battleship 3', length: 4, framesHit: 0, position: { row: 0, col: 0 } },
];

const AreaContainer: React.FC = () => {
	const [grid, setGrid] = useState<Grid>(initialGrid);
	const placedShipsRef = useRef<boolean>(false);
	const [notification, setNotification] = useState<string | null>(null);
	const [destroyedShipsCount, setDestroyedShipsCount] = useState<number>(0);

	useEffect(() => {
		if (placedShipsRef.current) return;

		placeShips();
		placedShipsRef.current = true;
	}, []);

	useEffect(() => {
		if (destroyedShipsCount === ships.length) {
			setNotification("Congratulations! You've destroyed all ships!");
		}
	}, [destroyedShipsCount]);

	const placeShips = (): void => {
		const newGrid: Grid = [...initialGrid];

		ships.forEach((ship) => placeShipRandomly(ship, newGrid));

		setGrid(newGrid);
	};

	const getRandomNumber = (max: number): number => Math.floor(Math.random() * max);

	const placeShipRandomly = (ship: ShipProps, newGrid: Grid): void => {
		let row: number;
		let col: number;
		let horizontal: boolean;

		do {
			row = getRandomNumber(10);
			col = getRandomNumber(10);
			horizontal = Math.random() < 0.5;
		} while (!canPlaceShip(row, col, ship.length, horizontal, newGrid));

		ship.position = { row, col, horizontal }; // Store ship position and orientation
		for (let i = 0; i < ship.length; i++) {
			const curRow = horizontal ? row : row + i;
			const curCol = horizontal ? col + i : col;
			newGrid[curRow][curCol].isShip = true;
			newGrid[curRow][curCol].shipId = ship.id; // Store ship ID in each cell
		}
	};

	const isWithinGridAndHasShip = (i: number, j: number, grid: Grid): boolean => i >= 0 && i < 10 && j >= 0 && j < 10 && grid[i][j].isShip;

	const canPlaceShip = (row: number, col: number, length: number, horizontal: boolean, grid: Grid): boolean => {
		const maxRow = horizontal ? row + 1 : row + length;
		const maxCol = horizontal ? col + length : col + 1;

		if (maxRow > 10 || maxCol > 10) return false;

		for (let i = row - 1; i <= maxRow; i++) {
			for (let j = col - 1; j <= maxCol; j++) {
				if (isWithinGridAndHasShip(i, j, grid)) return false;
			}
		}

		return true;
	};

	const isWithinGrid = (row: number, col: number): boolean => row >= 0 && row < 10 && col >= 0 && col < 10;

	const handleShot = (row: number, col: number): void => {
		const newGrid: Grid = [...grid];
		if (newGrid[row][col].isHit) return;

		newGrid[row][col].isHit = true;
		setGrid(newGrid);

		if (!newGrid[row][col].isShip) return;

		setNotification('You hit a ship!');

		const shipId = newGrid[row][col].shipId;
		const ship = ships.find((ship) => ship.id === shipId);
		if (!ship) return;

		ship.framesHit++;
		if (!checkIfShipSunk(ship)) return;

		setNotification(`You destroyed ${ship.name}!`);
		setDestroyedShipsCount((prevCount) => prevCount + 1);

		const aroundShip = findCellsAroundShip(ship, newGrid);
		aroundShip.forEach(([r, c]) => {
			newGrid[r][c].isHit = true;
			newGrid[r][c].color = 'red';
		});

		setGrid(newGrid);
	};

	const findCellsAroundShip = (ship: ShipProps, grid: Grid): [number, number][] => {
		const { position } = ship;
		const { row: shipRow, col: shipCol, horizontal } = position;
		const aroundShip: [number, number][] = [];

		for (let i = shipRow - 1; i <= shipRow + (horizontal ? 1 : ship.length); i++) {
			for (let j = shipCol - 1; j <= shipCol + (horizontal ? ship.length : 1); j++) {
				if (isWithinGrid(i, j) && !grid[i][j].isHit) {
					aroundShip.push([i, j]);
				}
			}
		}

		return aroundShip;
	};

	const checkIfShipSunk = (ship: ShipProps): boolean => {
		const isSunk = ship.framesHit === ship.length;
		if (isSunk) {
			ship.framesHit = 0;
			return true;
		}
		return false;
	};

	const handleCloseNotification = (): void => {
		setNotification(null);
	};

	const handleRestartGame = (): void => {
		const newGrid: Grid = Array.from({ length: 10 }, () =>
			Array.from({ length: 10 }, () => ({
				isHit: false,
				isShip: false,
				shipId: 0,
				onClick: () => {},
			}))
		);

		setGrid(newGrid);
		setNotification(null);
		setDestroyedShipsCount(0);

		ships.forEach((ship) => {
			ship.framesHit = 0;
			ship.position = { row: 0, col: 0, horizontal: false };
		});

		placedShipsRef.current = false;
	};

	return (
		<>
			{notification && <Notification message={notification} onClose={handleCloseNotification} />}
			<Area grid={grid} ships={ships} onShot={handleShot}/>
			{destroyedShipsCount === ships.length && <button onClick={handleRestartGame}>Restart the game</button>}
		</>
	);
};

export { AreaContainer };
