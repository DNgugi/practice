//ListOf arrays -> array

// Takes two or more arrays and returns an array of their symmetric difference. The returned array must contain only unique values (no duplicates).

// const sym = (loa) => []; //stub

const symOfTwo = (a, b) => {
  if (a.length === 0) {
    return b;
  }
  if (b.length === 0) {
    return a;
  }
  if (a.length === 0 && b.length === 0) {
    return [];
  }

  let result = [];
  a.forEach((item) => {
    if (b.indexOf(item) === -1 && result.indexOf(item) === -1) {
      result.push(item);
    }
  });
  b.forEach((item) => {
    if (a.indexOf(item) === -1 && result.indexOf(item) === -1) {
      result.push(item);
    }
  });
  return result;
};

const sym = (...loa) => {
  return loa.reduce(symOfTwo).sort((a, b) => a - b);
};

module.exports = sym;
