/**
 * 
 * 

A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two n-digit numbers.

 */

const isPalindrome = require("../../palindrome-checker/isPalindrome");

const lpp = (n) => {
  const palindromes = [];
    let max = Number("9".repeat(n));
    
  for (let i = max; i > 0; i--) {
    // console.log("Max", max, "i", i, max * i);
    if (isPalindrome((max * i).toString())) {
      palindromes.push(max * i);
    }
  }
  console.log(palindromes);
  return Math.max(...palindromes);
};

module.exports = lpp;

console.log(lpp(2));
