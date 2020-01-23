/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let index1 = 0
  let index2 = numbers.length - 1

  while (index1 < index2) {
    const number1 = numbers[index1]
    const number2 = numbers[index2]
    const value = number1 + number2

    if (value === target) {
      return [index1 + 1, index2 + 1]
    } else if (value > target) {
      index2 --
    } else {
      index1 ++
    }
  }

  return [index1 + 1, index2 + 1]
};