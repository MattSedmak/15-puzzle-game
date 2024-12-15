import { COL_SUM, TILE_COUNT } from '../config';
import { compareTilePositions } from './shared';

export const moveTiles = (
  startIndex: number,
  emptyIndex: number,
  tiles: number[]
) => {
  const { isSameRow, isSameCol } = compareTilePositions(startIndex, emptyIndex);
  const direction = startIndex < emptyIndex ? 1 : -1;
  const tilesCopy = [...tiles];

  // Check if the move is within the same row as empty tile.
  if (isSameRow) {
    for (let i = emptyIndex; i !== startIndex; i -= direction) {
      tilesCopy[i] = tilesCopy[i - direction];
    }
    tilesCopy[startIndex] = TILE_COUNT;
  }
  // Check if the move is within the same column as empty tile.
  if (isSameCol) {
    const step = COL_SUM * direction;
    for (let i = emptyIndex; i !== startIndex; i -= step) {
      tilesCopy[i] = tilesCopy[i - step];
    }
    tilesCopy[startIndex] = TILE_COUNT;
  }

  return tilesCopy;
};
