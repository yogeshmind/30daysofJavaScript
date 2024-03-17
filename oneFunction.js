var once = function (fn) {
    let hasBeenCalled = false;
    let result;

    return function () {
        if (!hasBeenCalled) {
            hasBeenCalled = true;
            result = fn.apply(this, arguments);
            return result;
        } else {
            return undefined;
        }
    };
};