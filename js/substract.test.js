const {
    expect
} = require('@jest/globals')
const substract = require('./substract')

test('properly substract two numbers', () => {
    expect(substract(1, 2)).toBe(-1);
})