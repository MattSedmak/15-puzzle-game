'use client';
import { useEffect, useState } from 'react';
import { COL_SUM, ROW_SUM, TILE_COUNT } from '../config';
import { Tile } from './Tile';
import { initializeShuffledTiles, shuffleTiles } from '../utils/shuffleTiles';
import { isVaildMove, isPuzzleSolved } from '../utils/shared';
import { moveTiles } from '../utils/moveTiles';

export const Board = () => {
  const [tiles, setTiles] = useState<number[]>([]);

  useEffect(() => {
    setTiles(initializeShuffledTiles(TILE_COUNT));
  }, []);

  const handleShuffleClick = () => {
    setTiles((prevTiles) => shuffleTiles(prevTiles));
  };

  const handleMoveTile = (clickedTileIndex: number) => {
    const emptyTileIndex = tiles.indexOf(tiles.length);
    if (!isVaildMove(clickedTileIndex, emptyTileIndex)) return;
    setTiles((prevTiles) => moveTiles(clickedTileIndex, emptyTileIndex, prevTiles));
  };

  const isGameWon = isPuzzleSolved(tiles);

  return (
    <>
      {isGameWon && (
        <p className='p-4 max-w-[300px] text-center'>
          Grattis, du löste spelet! <br />
          Tryck på Slumpa för att spela igen.
        </p>
      )}
      <div className='w-[300px] h-[300px] bg-slate-200 md:w-[400px] md:h-[400px] flex items-center justify-center rounded-md'>
        {tiles.length > 0 ? (
          <div
            className='grid gap-1 w-full h-full'
            style={{
              gridTemplateColumns: `repeat(${COL_SUM}, minmax(0, 1fr))`,
              gridTemplateRows: `repeat(${ROW_SUM}, minmax(0, 1fr))`,
            }}
          >
            {tiles.map((tile, i) => (
              <Tile key={tile} value={tile} index={i} onClick={handleMoveTile} />
            ))}
          </div>
        ) : (
          <div>Laddar spelet...</div>
        )}
      </div>
      <button
        className='mt-10 bg-black text-xl text-white py-3 px-8 rounded-full'
        onClick={handleShuffleClick}
      >
        Slumpa
      </button>
    </>
  );
};
