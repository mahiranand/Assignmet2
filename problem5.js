const olderCar = yearList => {

    return yearList.filter ( (ele) => {
       return ele < 2000 ;
    })
}

module.exports = olderCar;