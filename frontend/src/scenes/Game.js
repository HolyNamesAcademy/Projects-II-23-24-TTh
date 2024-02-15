import Phaser from 'phaser';

// This is the core "scene" that calls all other scenes.
class Game extends Phaser.Scene {
  constructor() {
    super('game');
    const counter;
  }

  init() {
  }

  create() {
    var charby = this.add.image(100, 100, 'charby');
    charby.setDisplaySize(100,100);

    var pizza1 = this.add.image(20,20, 'pizza');
    pizza1.setDisplaySize(60,60);
    var pizza2 = this.add.image(40,20, 'pizza');
    pizza2.setDisplaySize(60,60);
    var pizza3 = this.add.image(60,20, 'pizza');
    pizza3.setDisplaySize(60,60);

    pizza3.visible = false;

    this.counter = 0;
  }

  update() {
    if(counter == 900){
      counter = 0;
      console.log();
    }
    else{
      counter++;
    }
  }
}

export default Game;
