const multiples = require("./multiples");

describe("Multiples of 3 or 5", () => {
  it("works with base cases", () => {
    expect(multiples(1)).toBe(1);
    expect(multiples(0)).toBe(0);
  });

  it("works with valid input", () => {
    expect(multiples(49)).toBe(543);
    expect(multiples(1000)).toBe(234168);
    expect(multiples(8456)).toBe(16687353);
    expect(multiples(19564)).toBe(89301183);
  });
});
