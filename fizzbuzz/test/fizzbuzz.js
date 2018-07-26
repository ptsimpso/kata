// Entering a number divisible by 3 should return 'fizz'.
// Entering a number divisible by 5 should return 'buzz'.
// Entering a number divisible by 3 and 5 should return 'fizzbuzz'.
// Otherwise, it should return the input as a string.

var assert = require('assert');

const fizzbuzz = (number) => {
    if (_isDivisibleBy(number, 15)) {
        return 'fizzbuzz'
    }
    if (_isDivisibleBy(number, 5)) {
        return 'buzz';
    }
    if (_isDivisibleBy(number, 3)) {
        return 'fizz';
    }
    return number.toString(); 
};

const _isDivisibleBy = (number, mod) => {
    return number % mod == 0;
}

describe('FizzBuzz', () => {
    it("should return '1' when given 1", () => {
        assert.equal(fizzbuzz(1), '1')
    })
    it("should return '2' when given 2", () => {
        assert.equal(fizzbuzz(2), '2')
    })
    it("should return 'fizz' when given number divisible by 3", () => {
        assert.equal(fizzbuzz(21), 'fizz')
    })
    it("should return 'buzz' when given number divisible by 5", () => {
        assert.equal(fizzbuzz(35), 'buzz')
    })
    it("should return 'fizzbuzz' when given number is divisible by 15", () => {
        assert.equal(fizzbuzz(60), 'fizzbuzz')
    })
})