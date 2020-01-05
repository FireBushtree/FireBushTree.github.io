/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  const strArr = s.split(' ')

  let length = strArr.length - 1

  while (length >= 0) {
    if (strArr[length] !== '') {
      return strArr[length].length
    }

    length--
  }

  return 0
};