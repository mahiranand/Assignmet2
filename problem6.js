const BmwAudi = obj => {
    
    const cars = obj.filter( ob => {
        return (ob.car_make == 'BMW' || ob.car_make === 'Audi');
    })

    return cars;
}
module.exports = BmwAudi;