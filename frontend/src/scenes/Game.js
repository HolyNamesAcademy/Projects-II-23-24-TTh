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
      frameRate: 0,
      repeat: -1,
    });

    this.anims.create({
      key: 'hearts',
      frames: this.anims.generateFrameNumbers('charby', { frames: [3, 4, 5] }),
      frameRate: 2,
      repeat: -1,
    });

    const charby = this.add.sprite(100, 100);
    charby.setScale(0.5);

    charby.play('normal');

<<<<<<< HEAD
    pizza3.visible = false;

    var isClicking = false;
  }

  update() {
    const keys = ['hearts'];
    this.charbyhearts.anims.play('hearts', true);

    if(!this.input.activePointer.isDown && isClicking == true)
    {
      isClicking = false;
    }
    else if(this.input.activePointer.isDown && isClicking == false)
    {
      isClicking = true;
    }
    if(isClicking == true)
    {
    let c = 0;
    this.input.on('pointerup', function (charbyhearts) {
      c++;
      if (c === keys.length) {
        c = 0;
      }
      this.charbyhearts.anims.play(keys[c], true);
    });
    }
=======
    this.input.on('pointerdown', () => {
      charby.play('hearts');
      charby.playAfterRepeat('normal', 3);
    });
  }

  update() {
>>>>>>> 6752138e0a555b017aa1fd82a586c9e3ca5fc3ff
  }
}

export default Game;
