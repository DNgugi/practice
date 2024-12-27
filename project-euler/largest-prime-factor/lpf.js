/**
 * 

The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the given number?

 */

const largestPrimeFactor = (number) => {
  //divide by 2, store each 2 until hit road block, add
  //add 1 to the divisor until can divide then repeat at next roadblock;
  let divisor = 2;
  let primes = [];
  while (number / divisor >= 1) {
      if (Number.isInteger(number / divisor)) {
          primes.push(divisor);
          number = number / divisor;
        
        } else {
        divisor++;
    }
  }

    return Math.max(...primes);
};

console.log(largestPrimeFactor(3))
module.exports = largestPrimeFactor;
