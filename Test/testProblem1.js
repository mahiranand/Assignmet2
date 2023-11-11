const inventory = require("../inventory");
const findCarWithId = require("../problem1");

const car = findCarWithId(inventory);

console.log( `Car 33 is a ${car.car_year} ${car.car_make} ${car.car_model} `);