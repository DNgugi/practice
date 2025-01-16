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

const sym = require("../../sym/sym");
const isPrime = require("./isPrime");



const smallestMult = (n) => {
  let factorArr = [];
  for (let i = 2; i <= n; i++) {
    factorArr.push([i, factorize(i)]);
    console.log(factorArr);
  }
  sym(...factorArr);

  return factorArr.reduce((acc, item) => acc * item, 1);
};

console.log(smallestMult(5));

module.exports = smallestMult;
