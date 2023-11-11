const inventory = require("../inventory");
const findLastCar = require("../problem2");

const car = findLastCar(inventory);

console.log(`Last car is a ${car.car_make} ${car.car_model} `);