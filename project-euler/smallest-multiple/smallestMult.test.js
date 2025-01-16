const smallestMult = require("./smallestMult");

describe("Smallest Multiple", () => {
  it("works with valid input", () => {
    expect(smallestMult(5)).toBe(60);
  });
});

