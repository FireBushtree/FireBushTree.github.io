/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const symbol = [
    { label: 'I', value: 1 },
    { label: 'V', value: 5 },
    { label: 'X', value: 10 },
    { label: 'L', value: 50 },
    { label: 'C', value: 100 },
    { label: 'D', value: 500 },
    { label: 'M', value: 1000 },
    { label: 'IV', value: 4 },
    { label: 'IX', value: 9 },
    { label: 'XL', value: 40 },
    { label: 'XC', value: 90 },
    { label: 'CD', value: 400 },
    { label: 'CM', value: 900 },
  ]

  let result = 0;

  for (let i = 0; i < s.length; i++) {
    const currentSymbol = symbol.find(item => item.label === s[i]);
    const nextSymbol = symbol.find(item => item.label === s[i + 1]);

    if (nextSymbol && currentSymbol.value < nextSymbol.value) {
      result += symbol.find(item => item.label === s[i] + s[i + 1]).value
      i++;
    } else {
      result += currentSymbol.value
    }
  }

  return result
};

console.log(romanToInt('MCMXCIV'))