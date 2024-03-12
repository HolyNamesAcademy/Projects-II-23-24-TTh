import Phaser from 'phaser';
import store from '.../store';

// This is the core "scene" that calls all other scenes.
class Game extends Phaser.Scene {
  constructor() {
    super('game');
    this.hunger = 0;
    this.pizzas = [];
  }

  init() {}

  create() {
    this.pizzas = [
      this.add.image(20, 20, 'pizza').setDisplaySize(60, 60),
      this.add.image(40, 20, 'pizza').setDisplaySize(60, 60),
      this.add.image(60, 20, 'pizza').setDisplaySize(60, 60),
    ];

    this.stateUpdated();

    store.subscribe(() => this.stateUpdated());

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
      frames: this.anims.generateFrameNumbers('charby', { frames: [1, 2, 3, 4] }),
      frameRate: 1,
      repeat: -1,
    });

    this.anims.create({
      key: 'drink',
      frames: this.anims.generateFrameNumbers('charby', { frames: [8, 9, 10, 11] }),
      frameRate: 2,
    });

    this.anims.create({
          key: 'feed',
          frames: this.anims.generateFrameNumbers('charby', { frames: [5, 6, 7] }),
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
      pizza.visible = hunger > index;
    });
  }

  update() {
  }
}

export default Game;
