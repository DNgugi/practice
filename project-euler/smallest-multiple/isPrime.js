const isPrime = (n) => {
  if (n < 2) return false;
  if (n === 2 || n === 3) return true;
  let sqrt = Math.sqrt(n);
  for (let i = 2; i <= sqrt; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

console.log(isPrime(4));
module.exports = isPrime;
