/**
 * SIGNATURE:
 * String -> Boolean
 *
 * PURPOSE:
 * validate input as valid US phone numbers
 *
 * STUB:
 * const validator = phone => {
 * return null;
 * }
 *
 * EXAMPLES:
 * 1 555-555-5555
 * 1 (555) 555-5555
 * 1(555)555-5555
 * 1 555 555 5555
 * 5555555555
 * 555-555-5555
 * (555)555-5555
 */
const validator = (phone) => {
  const regex = /1?\s?\(?[0-9]+\)?\s?-?[0-9]+\s?-?[0-9]+/;
    // console.log(phone.match(regex));
    if (phone.length < 10) {
        return false;
    }
  return regex.test(phone) ? true : false;
};

console.log(validator("555-5555"));

module.exports = validator;
