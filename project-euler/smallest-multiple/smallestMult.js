/**
 * Problem 5: Smallest multiple
 * 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
 * What is the smallest positive number that is evenly divisible by all of the numbers from 1 to n?
 *
 * SIGNATURE:
 * Number -> Number
 *
 * PURPOSE:
 *
 * STUB:
 * const smallestMultiple = (num) => {
 * return 0;
 * }
 *
 * EXAMPLES:
 * smallestMult(10) -> 2520
 * smallestMult(5) -> 60
 * smallestMult(7) -> 420
 * smallestMult(10) -> 2520
 * smallestMult(13) -> 360360
 * smallestMult(20) -> 232792560.
 * */

const smallestMult = (n) => {
  let smallest = n;
  let arrayN = [];
  for (let i = 1; i <= n; i++) arrayN.push(i);

  arrayN.forEach((item) => {
    if (smallest % item === 0) {
      return smallest;
    }
    smallest++;
  });
  console.log(smallest, arrayN);
  // return true;
};

smallestMult(5);

module.exports = smallestMult;
