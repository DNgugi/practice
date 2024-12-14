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
});
