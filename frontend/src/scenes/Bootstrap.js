import Phaser from 'phaser';

// This is the phaser bootstrap. This is where you can
// preload any assets or other perform other setup functions.
class Bootstrap extends Phaser.Scene {
  constructor() {
    super('bootstrap');
  }

  init() {}

  preload() {
    // Load additional assets here.
    this.load.image('charby', '/static/charby1.webp', { frameWidth: 32, frameHeight: 48 });
    this.load.image('pizza', '/static/pizza2.png', {frameWidth: 10, frameHeight: 10});
  }

  create() {
    this.createNewGame();
  }

  update() {}

  createNewGame() {
    // this launches the game scene
    this.scene.launch('game');
  }
}

export default Bootstrap;
