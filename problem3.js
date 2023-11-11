const carModelsList = (obj) => {

    const carList = obj.map( ob => {

        return ob.car_model;
    })

    carList.sort( (a,b) => {
        return a.localeCompare(b);
    });

    return carList;
}

module.exports = carModelsList;