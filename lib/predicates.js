var not = require('./functions').not;

function isUndefined(value) {
    return value === void 0;
}

function isNull(value) {
    return value === null;
}

function nonexistent(value) {
    return isUndefined(value) || isNull(value);
}

var existent = not(nonexistent);

module.exports = {
    isUndefined: isUndefined,
    isNull: isNull,
    nonexistent: nonexistent,
    existent: existent
};
