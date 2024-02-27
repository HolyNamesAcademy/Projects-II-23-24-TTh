import Phaser from 'phaser';

// This is the core "scene" that calls all other scenes.
class Game extends Phaser.Scene {
  constructor() {
    super('game');
  }

  init() {}

  create() {
    this.add.image(100, 100, 'charby').setScale(0.5);
  }

  update() {}
}

export default Game;
