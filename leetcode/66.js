/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  const length = digits.length - 1

  for (let i = length; i >=0; i--) {
    const val = digits[i] + 1
    digits[i] = val % 10

    let carryNumber = parseInt(val / 10)

    if (!carryNumber) {
      return digits
    }
  }

  digits.splice(0, 0, 1)

  return digits
};
