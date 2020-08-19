const sum = require('./sum');

describe('sum', () => {
    it('adds 1 + 2 to equal 3', () => {
        expect(sum(1, 2)).toBe(3);
    });
    it('adds 7 + 2 to equal 9', () => {
        expect(sum(7, 2)).toBe(10);
    });
    it('adds 3 + 6 to equal 9', () => {
        expect(sum(3, 6)).toBe(9);
    });
});
