import Phaser from 'phaser';
import store from '../store';

// This is the core "scene" that calls all other scenes.
class Game extends Phaser.Scene {
  constructor() {
    super('game');
    this.hunger = -1;
    this.pizzas = [];
    this.charby = null;
    this.last_animation_played = -1;
  }

  init() {}

  create() {
    this.pizzas = [
      this.add.image(20, 20, 'pizza').setDisplaySize(60, 60),
      this.add.image(40, 20, 'pizza').setDisplaySize(60, 60),
      this.add.image(60, 20, 'pizza').setDisplaySize(60, 60),
    ];

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
      frameRate: 0.1,
      repeat: -1,
    });

    this.anims.create({
      key: 'deflate1',
      frames: this.anims.generateFrameNumbers('charby', { frames: [4] }),
      frameRate: 0,
      repeat: -1,
    });

    this.anims.create({
      key: 'drink',
      frames: this.anims.generateFrameNumbers('charby', { frames: [8, 9, 10, 11] }),
      frameRate: 2,
      repeat: -1,
    });

    this.anims.create({
      key: 'feed',
      frames: this.anims.generateFrameNumbers('charby', { frames: [5, 6, 7] }),
      frameRate: 2,
    });

    this.anims.create({
      key: 'cpscar',
      frames: this.anims.generateFrameNumbers('cps', { frames: [0, 1] }),
      frameRate: 1,
      repeat: -1,
    });

    this.anims.create({
      key: 'cps',
      frames: this.anims.generateFrameNumbers('charby', { frames: [15] }),
      frameRate: 0,
      repeat: -1,
    });

    this.charby = this.add.sprite(96, 96);

    this.charby.play('normal');

    // pet anim
    this.input.on('pointerdown', () => {
      if (this.hunger > 0) {
        this.charby.play('hearts');
        this.charby.playAfterRepeat('normal', 3);
      }
    });

    this.stateUpdated();
    store.subscribe(() => this.stateUpdated());
  }

  stateUpdated() {
    const state = store.getState();
    this.updatePizza(state.charby.hunger);
    this.updateCharby(state.charby.hunger);
    this.hunger = state.charby.hunger;
    this.playAnimation(state.charby.animations);
  }

  updatePizza(hunger) {
    if (this.hunger === hunger) {
      return;
    }
    this.pizzas.forEach((pizza, index) => {
      // eslint-disable-next-line no-param-reassign
      pizza.visible = hunger > index;
    });
  }

  updateCharby(hunger) {
    if (hunger === 0) {
      // eslint-disable-next-line no-debugger
      this.charby.play('deflate');
      this.charby.playAfterRepeat('deflate1', 0);
    }
    if (hunger !== 0 && this.hunger === 0) {
      this.charby.play('normal');
    }
    if (hunger === -1) {
      this.charby.play('cpscar');
      this.charby.playAfterRepeat('cps', 3);
    }
  }

  playAnimation(animations) {
    while (this.last_animation_played < animations.length - 1) {
      this.last_animation_played++;
      const animation = animations[this.last_animation_played];
      if (this.hunger > 0) {
        this.charby.play(animation);
        this.charby.playAfterRepeat('normal', 0);
      }
    }
  }

  update() {
  }
}

export default Game;
