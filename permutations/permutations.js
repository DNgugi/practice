/**
 * Given two strings, write a method to decide if one is a permutation of the
other.

SIGNATURE:
Str, Str -> Bool.

PURPOSE:


STUB:
const permutations = (str1, str2) => {
    return false;    
}

EXAMPLES:

permutaions("dog", "gdo") -> true
permutations("abc", "abd") -> false
permutaions("doog", "gdo") -> false
permutaions("", "") -> true
permutaions("dog   ", "gdo") -> true

 */

const permutations = (str1, str2) => {
  //strip white space first, then compare length
  if (str1 == "" && str2 == "") {
    return true;
  }
  if (str1.length != str2.length) {
    return false;
  }
  //sort both and compare sorted lists, or count numbers of each character then check if same
  return str1.sort() == str2.sort();
};

module.exports = permutations;
