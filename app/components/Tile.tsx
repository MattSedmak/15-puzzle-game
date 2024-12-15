'use client';
import { TILE_COUNT } from '../config';

interface TileProps {
  value: number;
  index: number;
  onClick: (value: number) => void;
}

export const Tile = ({ value, index, onClick }: TileProps) => {
  return (
    <div
      onClick={() => onClick(index)}
      className={`bg-blue-200 rounded-lg border border-black flex justify-center items-center ${
        value === TILE_COUNT
          ? 'opacity-0 pointer-events-none'
          : 'opacity-100 cursor-pointer pointer-events-auto'
      }`}
    >
      {value}
    </div>
  );
};
