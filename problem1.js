const findCarWithId = (obj) => {
    
    const ans = obj.filter( (ob) => {
        return ( (ob.id == 33) ?  ob : null);
    })
    return ans[0];
}

module.exports = findCarWithId;