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

    // const pizza1 = this.add.image(20, 20, 'pizza');
    // pizza1.setDisplaySize(60, 60);
    // const pizza2 = this.add.image(40, 20, 'pizza');
    // pizza2.setDisplaySize(60, 60);
    // const pizza3 = this.add.image(60, 20, 'pizza');
    // pizza3.setDisplaySize(60, 60);

    // pizza3.visible = false;

    // Animation set
    this.anims.create({
      key: 'normal',
      frames: this.anims.generateFrameNumbers('charby', { frames: [0] }),
      frameRate: 8,
    });

    this.anims.create({
      key: 'hearts',
      frames: this.anims.generateFrameNumbers('charbyhearts', { frames: [0, 1, 2] }),
      frameRate: 8,
      repeat: -1,
    });

    this.anims.create({
      key: 'walk',
      frames: this.anims.generateFrameNumbers('brawler', { frames: [0, 1, 2, 3] }),
      frameRate: 8,
      repeat: -1,
    });

    this.anims.create({
      key: 'idle',
      frames: this.anims.generateFrameNumbers('brawler', { frames: [5, 6, 7, 8] }),
      frameRate: 8,
      repeat: -1,
    });

    this.anims.create({
      key: 'kick',
      frames: this.anims.generateFrameNumbers('brawler', { frames: [10, 11, 12, 13, 10] }),
      frameRate: 8,
      repeat: -1,
      repeatDelay: 2000,
    });

    this.anims.create({
      key: 'punch',
      frames: this.anims.generateFrameNumbers('brawler', { frames: [15, 16, 17, 18, 17, 15] }),
      frameRate: 8,
      repeat: -1,
      repeatDelay: 2000,
    });

    this.anims.create({
      key: 'jump',
      frames: this.anims.generateFrameNumbers('brawler', { frames: [20, 21, 22, 23] }),
      frameRate: 8,
      repeat: -1,
    });

    this.anims.create({
      key: 'jumpkick',
      frames: this.anims.generateFrameNumbers('brawler', { frames: [20, 21, 22, 23, 25, 23, 22, 21] }),
      frameRate: 8,
      repeat: -1,
    });

    this.anims.create({
      key: 'win',
      frames: this.anims.generateFrameNumbers('brawler', { frames: [30, 31] }),
      frameRate: 8,
      repeat: -1,
      repeatDelay: 2000,
    });

    this.anims.create({
      key: 'die',
      frames: this.anims.generateFrameNumbers('brawler', { frames: [35, 36, 37] }),
      frameRate: 8,
    });

    // const keys = ['walk', 'idle', 'kick', 'punch', 'jump', 'jumpkick', 'win', 'die'];
    const keys = ['normal', 'hearts'];

    const charby = this.add.sprite(100, 100);
    charby.setScale(2);
    // if (this.input.on('pointerdown', () =>  {
    // charby.play('hearts');
    // })
    // );

    charby.play('normal');

    let c = 0;
    this.input.on('pointerdown', () => {
      c += 1;
      if (c === keys.length) {
        c = 0;
      }
      charby.play(keys[c]);
    });
  }

  update() {
  }
}

export default Game;
