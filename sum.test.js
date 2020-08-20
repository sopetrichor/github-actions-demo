const sum = require("./sum");

describe("sum", () => {
  it("adds 0 + 0 to equal 0", () => {
    expect(sum(0, 0)).toBe(0);
  });
  it("adds 1 + 4 to equal 5", () => {
    expect(sum(1, 4)).toBe(5);
  });
  it("adds 2 + 5 to equal 7", () => {
    expect(sum(2, 5)).toBe(7);
  });
  it("adds 3 + 6 to equal 9", () => {
    expect(sum(3, 6)).toBe(9);
  });
});
