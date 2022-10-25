const calculator = require('./calculator');



test('add, subtract, divide, multiple, take two numbers and return correct calculation', () => {

    expect(calculator(2,2)).toBe(4, 0, 1, 4);
});