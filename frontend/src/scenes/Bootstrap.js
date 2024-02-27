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
    this.load.spritesheet('charbyhearts', '/static/charbyhearts-sprite.png', { frameWidth: 320, frameHeight: 400 });
    this.load.spritesheet('brawler', '/static/brawler48x48.png', { frameWidth: 48, frameHeight: 48 });
    this.load.spritesheet('charby', '/static/charby3.png', { frameWidth: 100, frameHeight: 150 });
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
