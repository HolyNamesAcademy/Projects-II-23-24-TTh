import { useEffect } from 'react';
import createGame from '../phaserConfig';

// This is the phaser game component. It holds the container which the
// game will be rendered inside of.
function PhaserGame() {
  useEffect(() => {
    const game = createGame();
    return () => {
      game.destroy(true);
    };
  }, []);

  return (
    <div id="phaser-container" />
  );
}

export default PhaserGame;
