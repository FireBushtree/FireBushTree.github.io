/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  if (s.length !== t.length) {
    return false
  }

  const dictionary1 = {}
  const dictionary2 = {}

  for (let i = 0; i < s.length; i++) {
    if (
      (dictionary1[s[i]] && dictionary1[s[i]] !== t[i]) ||
      (dictionary2[t[i]] && dictionary2[t[i]] !== s[i])
    ) {
      return false
    }

    dictionary1[s[i]] = t[i]
    dictionary2[t[i]] = s[i]
  }

  return true
};