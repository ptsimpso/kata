// Entering a number divisible by 3 should return 'fizz'.
// Entering a number divisible by 5 should return 'buzz'.
// Entering a number divisible by 3 and 5 should return 'fizzbuzz'.
// Otherwise, it should return the input as a string.

var assert = require('assert');

fizzbuzzTransform = (input) => {

    return specialWordCheck(input, 15, 'fizzbuzz') || specialWordCheck(input, 3, 'fizz') || specialWordCheck(input, 5, 'buzz') || input.toString();

}

specialWordCheck = (input, mod, specialWord) => {
    if (input % mod == 0) {
        return specialWord
    }
}

describe('FizzBuzz converter', () => {

    it('should return the input as a string when the input is not divisible by 3', () => {
        assert.equal(fizzbuzzTransform(1), '1');
        assert.equal(fizzbuzzTransform(2), '2');
        assert.equal(fizzbuzzTransform(4), '4');
    });

    it('should return "fizz" when the input is divisible by 3', () => {
        assert.equal(fizzbuzzTransform(3), 'fizz');
        assert.equal(fizzbuzzTransform(3 * 2), 'fizz');
        assert.equal(fizzbuzzTransform(3 * 7), 'fizz');
    });

    it('should return "buzz" when the input is divisible by 5', () => {
        assert.equal(fizzbuzzTransform(5), 'buzz');
        assert.equal(fizzbuzzTransform(5 * 4), 'buzz');
    });

    it('should return "fizzbuzz" when the input is divisible by 3 and 5', () => {
        assert.equal(fizzbuzzTransform(15), 'fizzbuzz');
        assert.equal(fizzbuzzTransform(15 * 2), 'fizzbuzz');
    });

});