const letDuckActive = (duck) => {
  duck.walk();
  duck.swim();
  duck.quack();
};

const duck = {
  walk: () => console.log('walk'),
  swim: () => console.log('swim'),
  quack: () => console.log('quack'),
}

letDuckActive(duck);

const robotDuck = {
  walk: () => console.log('w-a-l-k'),
  swim: () => console.log('s-w-i-m'),
  quack: () => console.log('q-u-a-ck'),
}

letDuckActive(robotDuck);