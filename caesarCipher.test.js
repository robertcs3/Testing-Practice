const caesarCipher = require('./caesarCipher');

test('takes a string and returns it with each character shifted', () => {

    expect(caesarCipher('defend', 1)).toBe('efgfoe');
});