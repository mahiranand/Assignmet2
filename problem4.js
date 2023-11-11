const allCarYears = (obj) => {

    const yearList = obj.map( ob => {
        return ob.car_year;
    })
    return yearList;
}

module.exports = allCarYears;