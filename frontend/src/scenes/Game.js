import Phaser from 'phaser';

// This is the core "scene" that calls all other scenes.
class Game extends Phaser.Scene {
  constructor() {
    super('game');
  }

  init() {}

  create() {
    this.anims.create({
      key: 'hearts',
      frames: this.anims.generateFrameNumbers('charbyhearts', { start: 0, end: 2 }),
      frameRate: 4,
    });

    // this.keys = ['hearts'];
    this.charbyhearts = this.add.sprite(100, 100, 'charbyhearts');
    this.charbyhearts.setScale(8);

    const charby1 = this.add.image(100, 120, 'charby');
    charby1.setDisplaySize(200, 250);
    // charby1.setScale(8);

    const pizza1 = this.add.image(20, 20, 'pizza');
    pizza1.setDisplaySize(60, 60);
    const pizza2 = this.add.image(40, 20, 'pizza');
    pizza2.setDisplaySize(60, 60);
    const pizza3 = this.add.image(60, 20, 'pizza');
    pizza3.setDisplaySize(60, 60);

    pizza3.visible = false;
  }

  update() {
    const keys = ['hearts'];
    this.charbyhearts.anims.play('hearts', true);

    let c = 0;
    this.input.on('pointerup', function (charbyhearts) {
      c++;
      if (c === keys.length) {
        c = 0;
      }
      this.charbyhearts.anims.play(keys[c], true);
    });
  }
}

export default Game;
