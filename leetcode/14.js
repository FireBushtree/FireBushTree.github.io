/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let result = ''
  const [firstStr] = strs

  if (!firstStr) {
    return result
  }

  const hasCommonPrefix = function (symbol) {
    for (let i = 1; i < strs.length; i++) {
      if (!strs[i].startsWith(symbol)) {
        return false
      }
    }

    return true
  }

  for (let i = 0; i < firstStr.length; i++) {
    const currentSymbol = firstStr.slice(0, i + 1)

    if (hasCommonPrefix(currentSymbol)) {
      result = currentSymbol
    }
  }

  return result
};

console.log(longestCommonPrefix([]))