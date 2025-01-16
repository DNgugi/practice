const isPrime = require("./isPrime");

describe("Is Prime", () => {
  it("works with valid input", () => {
    expect(isPrime(2)).toBe(true);
    expect(isPrime(3)).toBe(true);
    expect(isPrime(4)).toBe(false);
    expect(isPrime(5)).toBe(true);
  });
});
