const convertToRoman = require("./convertToRoman");

describe("Roman Numeral Converter", () => {
  test("it works with empty input", () => {
    expect(convertToRoman("")).toBe("invalid");
  });

  test("it works with negative input", () => {
    expect(convertToRoman("-1")).toBe("negative");
  });

  test("it works with  input >= 4000", () => {
    expect(convertToRoman("4000")).toBe("too big");
  });

  test("it works with  valid input e.g 5", () => {
    expect(convertToRoman("5")).toBe("V");
  });

  test("it works with  valid input e.g 10", () => {
    expect(convertToRoman("10")).toBe("X");
  });

  test("it works with  valid input e.g 1000", () => {
    expect(convertToRoman("1000")).toBe("M");
  });

  test("it works with  valid input not in set of 7 basic symbols e.g 9", () => {
    expect(convertToRoman("9")).toBe("IX");
  });
  test("it works with  valid input not in set of 7 basic symbols e.g 8", () => {
    expect(convertToRoman("8")).toBe("VIII");
  });
  test("it works with  valid input not in set of 7 basic symbols e.g 2", () => {
    expect(convertToRoman("2")).toBe("II");
  });
});
