/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let maxArea = 0

  for (let i = 0; i < height.length; i++) {
    let minHeight = height[i]

    for (let j = i + 1; j < height.length; j++) {
      minHeight = height[j] < height[i] ? height[j] : height[i]
      const length = j - i
      const val = length * minHeight
      if (val > maxArea) {
        maxArea = val
      }
    }
  }

  return maxArea
};

var maxArea = function (height) {
  let left = 0
  let right = height.length - 1
  let maxArea = 0

  while (left < right) {
    const area = (right - left) * Math.min(height[left], height[right])
    maxArea = Math.max(area, maxArea)

    if (height[left] > height[right]) {
      right --
    } else {
      left ++
    }
  }

  return maxArea
}