const Tiger = require('./Tiger');
const Wolf = require('./Wolf');

const fighting = (tiger, wolf) => {
  if (tiger.strength > wolf.strength) {
    tiger.growl();
    return;
  } else {
    wolf.howl();
  }
};

const tiger = new Tiger();
const wolf = new Wolf();

fighting(tiger, wolf)
