
function isUndefined(value) {
    return value === void 0;
}

function isNull(value) {
    return value === null;
}

module.exports = {
    isUndefined: isUndefined,
    isNull: isNull
};
