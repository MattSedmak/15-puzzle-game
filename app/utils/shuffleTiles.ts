export const shuffleTiles = (tiles: number[]) => {
  const newTiles = [...tiles];

  for (let i = newTiles.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [newTiles[i], newTiles[randomIndex]] = [newTiles[randomIndex], newTiles[i]];
  }
  return newTiles;
};

export const initializeShuffledTiles = (tileCount: number) =>
  shuffleTiles(Array.from({ length: tileCount }, (_, i) => i + 1));
