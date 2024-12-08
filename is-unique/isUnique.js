/*
Implement an algorithm to determine if a string has all unique characters. 
What if you cannot use additional data structures?
 - Compare every letter to every other letter
 - Sort first and check every letter against neighbours, soon as any char = neighbour, return false. If get to end of str then return true.
*/

/*
SIGNATURE
String -> Boolean

PURPOSE
Determine if a string has all unique characters

STUB
const isUnique = (str) => {
    return false
}

Examples
isUnique("") -> false;
isUnique("a") -> true;
isUnique("aa") -> false;
isUnique("ab") -> true;
isUnique("aabb") -> false;
isUnique("abc") -> true;
isUnique("123") -> true; 
*/

//Consider that only 256 ASCII characters exist, so any string longer that 256 characters should return false.
const isUnique = (str) => {
  if (str === "" || str.length > 256) {
    return false;
  }
  if (str.length == 1) {
    return true;
  }
  const uniques = new Set();
  for (let char of str) {
    if (char in uniques) {
      return false;
    } else {
      uniques += char;
    }
  }
  return true;
};

module.exports = isUnique;
