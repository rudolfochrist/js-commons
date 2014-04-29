function not(fn) {
    return function() {
        return !fn.apply(this, arguments);
    };
}

module.exports = {
    not: not
};
