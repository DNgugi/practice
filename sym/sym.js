//ListOf arrays -> array

// Takes two or more arrays and returns an array of their symmetric difference. The returned array must contain only unique values (no duplicates).

// const sym = (loa) => []; //stub
const removeDuplicates = (arr) => {
  if (arr.length === 0) {
    return arr;
  }
  let set = new Set();
  for (let i = 0; i < arr.length; i++) {
    if (!set.has(arr[i])) {
      set.add(arr[i]);
    }
  }
  return Array.from(set);
};

const symOfTwo = (arr1, arr2) => {
  return removeDuplicates([
    ...removeDuplicates(arr1),
    ...removeDuplicates(arr2),
  ]);
};

const sym = (...loa) => {
  let results = [];
};

console.log(
  sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1])
);

// console.log(sym([1, 2, 3], [5, 2, 1, 4]));

module.exports = sym;
