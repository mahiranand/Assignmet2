const inventory = require("../inventory");
const BmwAudi = require("../problem6");

const abCars = BmwAudi(inventory);

console.log(JSON.stringify(abCars));