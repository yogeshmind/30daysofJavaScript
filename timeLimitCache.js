var TimeLimitedCache = function () {
    this.cache = new Map();
};

TimeLimitedCache.prototype.set = function (key, value, duration) {
    const now = Date.now();
    if (this.cache.has(key)) {
        this.cache.set(key, [value, now + duration]);
        return true;
    }
    this.cache.set(key, [value, now + duration]);
    return false;
};

TimeLimitedCache.prototype.get = function (key) {
    const now = Date.now();
    if (this.cache.has(key)) {
        const [value, expiry] = this.cache.get(key);
        if (now < expiry) {
            return value;
        } else {
            this.cache.delete(key);
        }
    }
    return -1;
};

TimeLimitedCache.prototype.count = function () {
    const now = Date.now();
    let count = 0;
    for (const [key, [_, expiry]] of this.cache) {
        if (now < expiry) {
            count++;
        } else {
            this.cache.delete(key);
        }
    }
    return count;
};
