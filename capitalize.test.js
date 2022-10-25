const capitalize = require('./capitalize');


test('capitalizes first character of string', () => {
    expect(capitalize('apple')).toBe('Apple');
});