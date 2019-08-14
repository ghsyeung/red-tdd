function _firstUniqueChar(string) {
  const fullMap = [...string].reduce((map, c) => {
    map[c] = map[c] ? map[c] + 1 : 1;
    return map;
  }, {});
  return [...string].find(s => fullMap[s] === 1);
}

function isCharacterInString(ch, string) {
  return string.includes(ch);
}

// O(n^2)
function firstUniqueChar(string) {
  // For each character ch in string 
  // 1) check if ch is in the rest of the string
  for (let i = 0; i < string.length; i++) {
    // O(1)
    const ch = string[i];
    // O(n)
    const rest = string.substring(0, i) + string.substring(i+1);

    // O(n)
    if (!isCharacterInString(ch, rest)) {
      return ch;
    }
  }
  return undefined;
}

describe('firstUniqueChar', () => {
  test('""', () => {
    const input = "";
    expect(firstUniqueChar(input)).toEqual(undefined);
  });
  test('"a"', () => {
    const input = "a";
    expect(firstUniqueChar(input)).toEqual("a");
  });
  test('"aab"', () => {
    const input = "aab";
    expect(firstUniqueChar(input)).toEqual("b");
  });
  test('"aba"', () => {
    const input = "aba";
    expect(firstUniqueChar(input)).toEqual("b");
  });
  test('"aaa"', () => {
    const input = "aaa";
    expect(firstUniqueChar(input)).toEqual(undefined);
  });
  test('"abab"', () => {
    const input = "abab";
    expect(firstUniqueChar(input)).toEqual(undefined);
  });
  test('"abcd"', () => {
    const input = "abcd";
    expect(firstUniqueChar(input)).toEqual("a");
  });
  test('"aabbdcee"', () => {
    const input = "aabbdcee";
    expect(firstUniqueChar(input)).toEqual("d");
  });
});
