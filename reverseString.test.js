const reverseString = require('./reverseString');


test('reverse a string', () => {
    expect(reverseString('bobby')).toBe('ybbob');
})