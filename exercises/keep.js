'use strict';

/*
 * Create a `keepLast` function that takes a string as parameter
 * and return the string only keeping the 2 first characters
 *
 * Create a `keepLast` function that takes a string as parameter
 * and return the string only keeping the 2 last characters
 *
 * Create a `keepFirstLast` function that takes a string as parameter
 * and only keep 2 characters from the third character
 *
 */

// Your code:
const keepFirst = (str) => {
    return str.substring(0, 2)
}

const keepLast = (str) => {
    return str.substring(str.length-2, str.length)
}

//* Begin of tests
const assert = require('assert');
assert.strictEqual(typeof keepFirst, 'function');
assert.strictEqual(keepFirst.length, 1);
assert.deepStrictEqual(keepFirst('abcdef'), 'ab');
assert.strictEqual(typeof keepLast, 'function');
assert.strictEqual(keepLast.length, 1);
assert.deepStrictEqual(keepLast('abcdef'), 'ef');

// assert.fail('You must write your own tests');
// End of tests */
