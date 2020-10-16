'use strict';

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */

// Your code:
const jadenCase = (str) => {
    return str.replace(/(^|\s)\S/g, l => l.toUpperCase())
}

//* Begin of tests
const assert = require('assert');

assert.strictEqual(typeof jadenCase, 'function');
assert.strictEqual(jadenCase.length, 1);
assert.deepStrictEqual(jadenCase('hello my world'), 'Hello My World');

// assert.fail('You must write your own tests');
// End of tests */
