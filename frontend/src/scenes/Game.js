import Phaser from 'phaser';

// This is the core "scene" that calls all other scenes.
class Game extends Phaser.Scene {
  constructor() {
    super('game');
  }

  init() {}

  create() {
    // const charby1 = this.add.image(100, 120, 'charby');
    // charby1.setDisplaySize(200, 250);

    const pizza1 = this.add.image(20, 20, 'pizza');
    pizza1.setDisplaySize(60, 60);
    const pizza2 = this.add.image(40, 20, 'pizza');
    pizza2.setDisplaySize(60, 60);
    const pizza3 = this.add.image(60, 20, 'pizza');
    pizza3.setDisplaySize(60, 60);

    // pizza3.visible = false;

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
  }

  update() {
  }
}

export default Game;
