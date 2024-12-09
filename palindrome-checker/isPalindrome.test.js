const isPalindrome = require("./isPalindrome");

it("works with empty string", () => {
  expect(isPalindrome("")).toBe(false);
});

it("works with one letter input", () => {
  expect(isPalindrome("A")).toBe(true);
});

it("works with a palindrome of 2 characters", () => {
  expect(isPalindrome("AA")).toBe(true);
});

it("works with a non-palindrome of 2 characters", () => {
  expect(isPalindrome("AB")).toBe(false);
});

it("works with a palindrome of more than 2 characters", () => {
  expect(isPalindrome("ABBA")).toBe(true);
});

it("works with a non-palindrome of more than 2 characters", () => {
  expect(isPalindrome("ABCA")).toBe(false);
});

it("works with special character e.g _ before letters", () => {
  expect(isPalindrome("_eye")).toBe(true);
});

it("works with spaces in palindrome input", () => {
  expect(isPalindrome("race car")).toBe(true);
});

it("works with a non-palindrome of more than 2 characters, with spaces", () => {
  expect(isPalindrome("not a palindrome")).toBe(false);
});

it("works with spaces and numbers in palindrome input", () => {
  expect(isPalindrome("My age is 0, 0 si ega ym")).toBe(true);
});

it("works with special characters only in palindrome input", () => {
  expect(isPalindrome("0_0 (: /- :) 0-0")).toBe(true);
});

it("works with non-palindrome input of even length", () => {
  expect(isPalindrome("almostomla")).toBe(false);
});
