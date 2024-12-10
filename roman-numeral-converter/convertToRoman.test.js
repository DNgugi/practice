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
});
