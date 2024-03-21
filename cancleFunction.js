var cancellable = function (fn, args, t) {
    let timeout = setTimeout(() => {
        fn(...args)
    }, t)

    return function () {
        clearTimeout(timeout)
    }
};