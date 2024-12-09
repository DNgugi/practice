/**
 * SIGNATURE:
 * String -> Boolean
 *
 * PURPOSE:
 * Return true if a given string is a palindrome
 *
 * STUB:
 * const isPalindrome = (text) => {
 * return false;
 * }
 *
 * EXAMPLES:
 * A -> true
 * AA -> true
 * _eye -> true
 * race car -> true
 * not a palindrome -> false
 * My age is 0, 0 si ega ym -> true
 * 0_0 (: /-\ :) 0-0 -> true;
 */


const isPalindrome = (text) => {
  if (text === "") {
    return false;
  }

  const isLetter = (text) => {
    return text.match(/[a-z]/gi) !== null ? true : false;
  };

  if (text.length === 1 && isLetter(text)) {
    return true;
  }

  const cleanInput = (text) => {
    return text.replace(/[^a-zA-Z0-9]/g, "");
  };

  text = cleanInput(text);
  let startPointer = 0;
  let endPointer = text.length - 1;

  while (startPointer !== endPointer) {
    startPointer++;
    endPointer--;
    if (text[startPointer] !== text[endPointer]) {
      return false;
    } else {
      return true;
    }
  }
};


console.log(isPalindrome("almostomla"));

module.exports = isPalindrome;
