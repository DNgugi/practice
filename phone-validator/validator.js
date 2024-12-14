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
  if (phone.length > 16) {
    return false;
  }
  // regex?:  /1\s?(\(?\d{3}\)?)[\s-]?(\d{3})[\s-]?(\d{4})/;

  const regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;

  return regex.test(phone) ? true : false;
};

console.log(validator("123**&!!asdf#"));

module.exports = validator;
