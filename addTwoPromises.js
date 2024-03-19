var addTwoPromises = async function(promise1, promise2) {
    return promise1.then(v1 => promise2.then(v2 => v1+v2));
};