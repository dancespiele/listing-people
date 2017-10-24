import {activationStrategy} from 'aurelia-router';

export class People {
  determineActivationStrategy() {
    return activationStrategy.replace;
  }

  constructor() {
    this.cols = [
      {
        name: 'super-power',
        title: 'Super power'
      },
      {
        name: 'rich',
        title: 'Rich'
      },
      {
        name: 'genius',
        title: 'Genius'
      }
    ];
  }
}
