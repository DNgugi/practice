const noRepeats = require('./no-repeats.js');
// test('', () => {

// })

test('empty string', () => {
    expect(noRepeats("")).toBe(0);
})

test("same characters", () => {
  expect(noRepeats("aaa")).toBe(0);
});

test("aab", () => {
  expect(noRepeats('aab')).toBe(2);
});

test("aabb", () => {
  expect(noRepeats("aab")).toBe(8);
});



