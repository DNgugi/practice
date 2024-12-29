const lpp = require("./lpp");

describe("Largest Palindrome Product", () => {
  it("works with valid inputs", () => {
    expect(lpp(2)).toBe(9009);
    expect(lpp(3)).toBe(906609);
  });
});
