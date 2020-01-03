/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const expectArray = []
  const symbols = {
    '(': ')',
    '{': '}',
    '[': ']'
  }

  const isStartSymbol = function (s) {
    return symbols.find(item => item.label === s)
  }

  for (let i = 0; i < s.length; i++) {
    const currentSymbol = s[i]
    const result = isStartSymbol(currentSymbol)

    if (result) {
      expectArray.push(result.corresponding)
    } else {
      if (expectArray.pop() !== currentSymbol) {
        return false
      }
    }
  }

  return expectArray.length === 0
};

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const expectArray = []
  const symbols = {
    '(': ')',
    '{': '}',
    '[': ']'
  }

  for (let key of s) {
    if (key in symbols) {
      expectArray.push(symbols[key])
    } else {
      if (expectArray.pop() !== key) {
        return false
      }
    }
  }

  return expectArray.length === 0
};
