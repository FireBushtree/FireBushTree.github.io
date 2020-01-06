/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  let i1 = 0
  let i2 = 0

  while (i2 < n) {
    const n1 = nums1[i1]
    const n2 = nums2[i2]

    if (n1 === 0) {
      for (let i = i2; i < n; i++) {
        nums1[i1++] = nums2[i2]
      }

      return
    }

    if (n1 <= n2) {
      i1 ++
    } else {
      for (let i = m + n - 1; i > i1; i--) {
        nums1[i] = nums1[i - 1]
      }

      nums1[i1] = n2
      i2 ++
      i1 ++
    }
  }
};