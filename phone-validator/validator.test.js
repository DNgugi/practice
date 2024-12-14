const validator = require("./validator");

test("it works with valid input", () => {
  expect(validator("1 555-555-5555")).toBe(true);
  expect(validator("1 555 555 5555")).toBe(true);
  expect(validator("1 (555) 555-5555")).toBe(true);
});

test("it works with invalid input", () => {
  expect(validator("555-5555")).toBe(false);
  expect(validator("5555555")).toBe(false);
  expect(validator("1 555)555-5555")).toBe(false);
  expect(validator("123**&!!asdf#")).toBe(false);
  expect(validator("6054756961")).toBe(false);
  expect(validator("2 (757) 622-7382")).toBe(false);
  expect(validator("0 (757) 622-7382")).toBe(false);
    expect(validator("-1 (757) 622-7382")).toBe(false);
    expect(validator("2 757 622-7382")).toBe(false);
        expect(validator("10 (757) 622-7382")).toBe(false);
    expect(validator("27576227382")).toBe(false);
    expect(validator("(275)76227382")).toBe(false);
    expect(validator("2(757)6227382")).toBe(false);
      expect(validator("555)-555-5555")).toBe(false);
      expect(validator("(555-555-5555")).toBe(false);





});
