import Phaser from 'phaser';

import { Bootstrap, Game } from './scenes';

const config = {
  type: Phaser.AUTO,
  parent: 'phaser-container',
  scale: {
    mode: Phaser.AUTO,
    width: 200,
    height: 200,
  },
  backgroundColor: '#E9D3FF',
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0 },
      debug: true,
    },
  },
  scene: [Bootstrap, Game],
};

export default function createGame() {
  return new Phaser.Game(config);
}
