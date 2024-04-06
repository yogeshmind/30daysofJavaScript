const join = function(arr1, arr2) {
    const ob = {};
    for(const i of arr1) {
        ob[i.id] = i;
    }
    for(const i of arr2) {
        ob[i.id] = ob[i.id] ? {...ob[i.id], ...i} : i;
    }
    return Object.values(ob);
};