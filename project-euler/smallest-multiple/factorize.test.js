const factorize = require("./factorize");


describe("Factorize", () => {
  it("works with valid input", () => {
    expect(factorize(25)).toBe([5, 5]);
  });
});