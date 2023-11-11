const inventory = require("../inventory");
const allCarYears = require("../problem4");
const olderCar = require("../problem5");

const ans = olderCar(allCarYears(inventory));

console.log(ans);
console.log(ans.length);