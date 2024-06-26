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
    this.load.image('pizza', `${process.env.PUBLIC_URL}/static/pizza2.png`, { frameWidth: 10, frameHeight: 10 });
    this.load.spritesheet('charby', `${process.env.PUBLIC_URL}/static/Spritesheet!!.png`, { frameWidth: 192, frameHeight: 192 });
    this.load.spritesheet('cps', `${process.env.PUBLIC_URL}/static/CPS_Spritesheet.png`, { frameWidth: 192, frameHeight: 192 });
    this.load.spritesheet('charby_party', `${process.env.PUBLIC_URL}/static/CharbyParty.png`, { frameWidth: 192, frameHeight: 192 });
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
