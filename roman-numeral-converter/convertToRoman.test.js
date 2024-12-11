const convertToRoman = require("./convertToRoman");

test("it works with negative input", () => {
  expect(convertToRoman(-1)).toBe("-1");
});

test("it works with  input >= 4000", () => {
  expect(convertToRoman(4000)).toBe("maxError");
});

test("it works with  valid input in special 7 symbols e.g 5", () => {
  expect(convertToRoman(5)).toBe("V");
});

test("it works with  valid input in special 7 symbols e.g 10", () => {
  expect(convertToRoman(10)).toBe("X");
});

test("it works with  valid input in special 7 symbols e.g 1000", () => {
  expect(convertToRoman(1000)).toBe("M");
});

test("it works with single digit input not in set of 7 basic symbols e.g 9", () => {
  expect(convertToRoman(9)).toBe("IX");
});
test("it works with single digit input not in set of 7 basic symbols e.g 8", () => {
  expect(convertToRoman(8)).toBe("VIII");
});
test("it works with single digit input not in set of 7 basic symbols e.g 2", () => {
  expect(convertToRoman(2)).toBe("II");
});
test("it works with 2 digit input not in set of 7 basic symbols e.g 21", () => {
  expect(convertToRoman(21)).toBe("XXI");
});

test("it works with 3 digit input not in set of 7 basic symbols e.g 649", () => {
  expect(convertToRoman(649)).toBe("DCXLIX");
});

test("it works with 4 digit input not in set of 7 basic symbols e.g 1023", () => {
  expect(convertToRoman(1023)).toBe("MXXIII");
});
