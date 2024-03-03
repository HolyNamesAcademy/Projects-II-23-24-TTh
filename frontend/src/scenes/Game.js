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
    this.add.image(100, 100, 'charby').setScale(0.5);

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
  }

  update() {}
}

export default Game;
