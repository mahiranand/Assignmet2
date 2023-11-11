const inventory = require("../inventory");
const carModelsList = require("../problem3");

const carList = carModelsList(inventory);

carList.forEach(element => {
    console.log(element);
});