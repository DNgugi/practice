//ListOf arrays -> array

// Takes two or more arrays and returns an array of their symmetric difference. The returned array must contain only unique values (no duplicates).

// const sym2 = (loa) => []; //stub

const symAll = (...loa) => {
  //call sym with next element in original loa with the result of calling sym on the first two elements
  if (loa.length == 0) {
    return [];
  }

  let arr = [...loa];

  if (arr.length > 2) {
    let first = arr.shift();
    let second = arr.shift();
    let nxt = arr.shift();

    return sym(sym(first, second), nxt);
  }
  return sym(loa[0], loa[1]);
};

const sym = (l1, l2) => {
  if (l1.length == 0 && l2.length > 0) {
    return l2;
  }
  if (l2.length == 0 && l1.length > 0) {
    return l1;
  }
  let results = [];
  let collection = [...l1, ...l2];
  for (el of collection) {
    if (l1.includes(el) && l2.includes(el)) {
      results.push(el);
    }
  }
  for (item of results) {
    collection.splice(collection.indexOf(item), 1);
  }

  return collection.sort();
};

// console.log(
//   symAll(
//     [3, 3, 3, 2, 5],
//     [2, 1, 5, 7],
//     [3, 4, 6, 6],
//     [1, 2, 3],
//     [5, 3, 9, 8],
//     [1]
//   )
// );

module.exports = symAll;
