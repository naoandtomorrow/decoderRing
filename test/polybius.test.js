// Write your tests here!
const assert = require('chai').assert;
const polybiusModule = require('../src/polybius.js');

describe('Polybius Module', function() {
  describe('Encoding', function() {
    it('Should encode a message correctly', function() {
      const encoded = polybiusModule.polybius('hello');
      assert.strictEqual(encoded, '3251131343');
    });

    it('Should encode a message with spaces correctly', function() {
      const encoded = polybiusModule.polybius('hello world');
      assert.strictEqual(encoded, '3251131343 2543241341');
    });

    it('Should return an empty string if the input contains only non-alphabetic characters', function() {
      const encoded = polybiusModule.polybius('');
      assert.strictEqual(encoded, '');
    });
  });

  describe('Decoding', function() {
    it('Should decode a message correctly', function() {
      const decoded = polybiusModule.polybius('3251131343', false);
      assert.strictEqual(decoded, 'hello');
    });

    it('Should decode a message with spaces correctly', function() {
      const decoded = polybiusModule.polybius('3251131343 2543241341', false);
      assert.strictEqual(decoded, 'hello world');
    });

    it('Should return false if the input has an odd number of digits (invalid)', function() {
      const decoded = polybiusModule.polybius('325113134', false);
      assert.strictEqual(decoded, false);
    });
  });
});

