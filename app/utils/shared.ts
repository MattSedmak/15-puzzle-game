import { COL_SUM, TILE_COUNT } from '../config';

const getTileCoordinates = (index: number) => {
  return {
    row: Math.floor(index / COL_SUM),
    col: index % COL_SUM,
  };
};

export const compareTilePositions = (startIndex: number, emptyIndex: number) => {
  const { row: clickedRow, col: clickedCol } = getTileCoordinates(startIndex);
  const { row: emptyRow, col: emptyCol } = getTileCoordinates(emptyIndex);

  // Check if move is within the same row or column
  const isSameRow = clickedRow === emptyRow;
  const isSameCol = clickedCol === emptyCol;

  return { isSameRow, isSameCol };
};

export const isVaildMove = (startIndex: number, emptyIndex: number) => {
  const { isSameRow, isSameCol } = compareTilePositions(startIndex, emptyIndex);

  return isSameRow || isSameCol;
};

export const isPuzzleSolved = (tiles: number[]) => {
  return (
    tiles.slice(0, -1).every((tile, index) => tile === index + 1) &&
    tiles[tiles.length - 1] === TILE_COUNT
  );
};
