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
    this.load.spritesheet('charbyhearts', '/static/charbyhearts-sprite.png', { frameWidth: 19, frameHeight: 22 });
    this.load.image('charby', '/static/charby3.png', { frameWidth: 11, frameHeight: 14 });
    this.load.image('pizza', '/static/pizza2.png', { frameWidth: 10, frameHeight: 10 });
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
