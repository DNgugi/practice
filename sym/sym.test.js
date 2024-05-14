const symAll = require('./sym.js');
// Empty arrays
test("works with list of 2 empty arrays", () => {
  expect(symAll([], [])).toEqual(expect.arrayContaining([]));
});

// sym([], [2,3,4]) = [2, 3, 4]
test('works with list of 2 arrays, first one empty', () => {
    expect(symAll([], [2, 3, 4])).toEqual(expect.arrayContaining([2, 3, 4]));
});

// sym([1,2,3], []) = [1,2, 3]
test('works with list of 2 arrays, second one empty', () => {
    expect(symAll([1, 2, 3], [])).toEqual(expect.arrayContaining([1, 2, 3]));
});

// sym([1,2,3], [2,3,4]) = [1,4]
test('works with list of 2 arrays', () => {
    expect(symAll([1, 2, 3], [2, 3, 4])).toEqual(expect.arrayContaining([1, 4]));
});

// sym([1, 2, 3], [5, 2, 1, 4]);

test("works with second list longer than the first", () => {
  expect(symAll([1, 2, 3], [5, 2, 1, 4])).toEqual(expect.arrayContaining([3, 4, 5]));
});

// symAll([1, 2, 4, 5], [3, 2, 1])
test("works with first list longer than the second", () => {
  expect(symAll([1, 2, 4, 5], [3, 2, 1])).toEqual(
    expect.arrayContaining([3, 4, 5])
  );
});

// symAll([1, 2, 5], [2, 3, 5], [3, 4, 5]);
test("works with three inputs", () => {
  expect(symAll([1, 2, 5], [2, 3, 5], [3, 4, 5])).toEqual(
    expect.arrayContaining([1, 4, 5])
  );
});

// sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]);

test("works with long inputs", () => {
  expect(
    symAll(
      [3, 3, 3, 2, 5],
      [2, 1, 5, 7],
      [3, 4, 6, 6],
      [1, 2, 3],
      [5, 3, 9, 8],
      [1]
    )
  ).toEqual(expect.arrayContaining([1, 2, 4, 5, 6, 7, 8, 9]));
});