import Phaser from 'phaser';
import store from '../store';

// This is the core "scene" that calls all other scenes.
class Game extends Phaser.Scene {
  constructor() {
    super('game');
    this.hunger = 0;
    this.pizzas = [];
  }

  init() {}

  create() {
    // Animation set
    this.anims.create({
      key: 'normal',
      frames: this.anims.generateFrameNumbers('charby', { frames: [0] }),
      frameRate: 0,
      repeat: -1,
    });

    this.anims.create({
      key: 'hearts',
      frames: this.anims.generateFrameNumbers('charby', { frames: [12, 13, 14] }),
      frameRate: 2,
      repeat: -1,
    });

    this.anims.create({
      key: 'deflate',
      frames: this.anims.generateFrameNumbers('charby', { frames: [1, 2, 4, 5] }),
      frameRate: 1,
      repeat: -1,
    });

    this.anims.create({
      key: 'drink',
      frames: this.anims.generateFrameNumbers('charby', { frames: [6, 8, 9, 10] }),
      frameRate: 2,
    });

    const charby = this.add.sprite(96, 96);
    charby.setScale(6);

    charby.play('normal');

    // pet anim
    this.input.on('pointerdown', () => {
      charby.play('hearts');
      charby.playAfterRepeat('normal', 3);
    });

    this.pizzas = [
      this.add.image(20, 20, 'pizza').setDisplaySize(60, 60),
      this.add.image(40, 20, 'pizza').setDisplaySize(60, 60),
      this.add.image(60, 20, 'pizza').setDisplaySize(60, 60),
      this.add.image(80, 20, 'pizza').setDisplaySize(60, 60),
    ];

    this.stateUpdated();

    // Start listening for changes
    store.subscribe(() => this.stateUpdated());
  }

  stateUpdated() {
    const state = store.getState();
    this.updatePizza(state.charby.hunger);
  }

  updatePizza(hunger) {
    if (this.hunger === hunger) {
      return;
    }

    this.pizzas.forEach((pizza, index) => {
      // eslint-disable-next-line no-param-reassign
      pizza.visible = hunger > index;
    });
    // const charby1 = this.add.image(100, 120, 'charby');
    // charby1.setDisplaySize(200, 250);
  }

  update() {
  }
}

export default Game;
