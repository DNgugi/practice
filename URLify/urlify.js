/**
 *  Write a method to replace all spaces in a string with '%20'. You may assume that the string
has sufficient space at the end to hold the additional characters, and that you are given the "true"
length of the string.

SIGNATURE:
Str -> Str

PURPOSE:
Replace all spaces in a string with '%20'

STUB:
const urlify = (str) => {
    return str;    
}

EXAMPLE
Input: "Mr John Smith ", 13
Output: "Mr%20John%20Smith"
*/

const urlify = (str) => {
    //strip white space at the ends?
    //split string on ' ',
    //join on '%20'
    let split = str.split(' ');
    return split.join("%20");
};

module.exports = urlify;