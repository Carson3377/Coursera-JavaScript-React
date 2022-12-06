var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']

function logDairy() {
    for (var item of dairy) {
        console.log(item);
    }
}
logDairy()

const animal = {
    canJump: true
};

const bird = Object.create(animal);
bird.canFly = true;
bird.hasFeathers = true;

function birdCan() {
    for (prop of Object.keys(bird)) {
        console.log(`${prop}: ${bird[prop]}`);
    }
}
birdCan();

function animalCan() {
    for (prop in bird) {
        console.log(`${prop}: ${bird[prop]}`);
    }
}
animalCan();