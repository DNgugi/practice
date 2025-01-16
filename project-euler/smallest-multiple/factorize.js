const isPrime = require("./isPrime");

const nextPrime = (n) => {
  return isPrime(n + 1) ? n + 1 : nextPrime(n + 1);
};

const factorize = (n) => {
  let factors = [];
    let currentPrime = 1;
    
  if (n > 1) {
    if (n % nextPrime(currentPrime) === 0) {
      factors.push(currentPrime);
      n = n / currentPrime;
      currentPrime++;
    }
  }
  return factors;
};

console.log(factorize(25));

module.exports = factorize;
