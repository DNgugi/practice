/**
 * 
 * SIGNATURE
 * Int -> Int
 * 
 * PURPOSE:
 * 
 * Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:
 * 
 * 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
 * 
 * By considering the terms in the Fibonacci sequence whose values do not exceed n, find the sum of the even-valued terms.
 * 
 * STUB:
 * 
 const fiboEvenSum = (num) => {
 return num
 }
 *
 *
 * EXAMPLES:
fiboEvenSum(10) -> 10.
fiboEvenSum(34) -> 44.
fiboEvenSum(60) -> 44.
fiboEvenSum(1000) -> 798.
fiboEvenSum(100000) -> 60696.
fiboEvenSum(4000000) -> 4613732.



 */

//generate fibonacci numbers < n;
//return sum of even numbers in that fib sequence;

function fiboEvenSum(n) {
  let fibArr = [1, 2];
  let checker = 0;
  let generator = 2;

  while (fibArr[checker] < n) {
    fibArr.push(fibArr[generator - 2] + fibArr[generator - 1]);
    checker++;
    generator++;
  }
  //   fibArr.filter((item) => item <= n);
  console.log(fibArr);

  return fibArr
    .filter((item) => item <= n && item % 2 === 0)
    .reduce((acc, item) => acc + item, 0);
}

console.log(fiboEvenSum(34));

module.exports = fiboEvenSum;
