/**
 * SIGNATURE:
 * Number -> Number
 *
 * PURPOSE:
 * If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
 * Find the sum of all the multiples of 3 or 5 below the provided parameter value number.
 *
 * STUB:
 * const multiplesOf3or5 = (num) => {
 *  return num;
 * }
 *
 * EXAMPLES:
 * multiplesOf3Or5(49) -> 543
 * multiplesOf3Or5(1000) -> 233168
 * multiplesOf3Or5(8456) -> 16687353
 * multiplesOf3Or5(19564) -> 89301183
 *
 * */

const multiples = (num) => {
  //sum of multiples of 3 or 5 < num
  if (num === 0 || num === 1) {
    return num;
  }
  let sum = 0;
  let count = num;
  for (let i = 0; i < count; i++){
    if (num % 3 === 0 || num % 5 === 0) {
      sum += num;
    }
    num--
  }

  return sum;

  
};

console.log(multiples(49));

module.exports = multiples;
