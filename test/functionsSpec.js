var not = require('../').functions.not;
var isUndefined = require('../').predicates.isUndefined;
var expect = require('chai').expect;

describe("Functions", function() {
    describe("not", function() {
        it("inverts predicates", function() {
            var isDefined = not(isUndefined);
            expect(isDefined('defined')).to.be.true;
        });
    });
});
