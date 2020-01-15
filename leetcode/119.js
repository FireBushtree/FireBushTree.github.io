/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  let result = []

  for (let i = 0; i <= rowIndex + 1; i++) {
    const row = []

    for (let j = 0; j < i; j++) {
      if (j === 0 || j === i - 1) {
        row[j] = 1
      } else {
        row[j] = result[j - 1] + result[j]
      }
    }

    result = row
  }

  return result
};