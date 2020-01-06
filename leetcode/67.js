/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  let aLen = a.length - 1
  let bLen = b.length - 1
  let carryNumber = 0
  let result = ''

  while (aLen >= 0 || bLen >= 0 || carryNumber !== 0) {
    const value = (a[aLen] ? parseInt(a[aLen]) : 0) +
                  (b[bLen] ? parseInt(b[bLen]) : 0) +
                  carryNumber
    result = value % 2 + result
    carryNumber = parseInt(value / 2)

    aLen--
    bLen--
  }

  return result
};