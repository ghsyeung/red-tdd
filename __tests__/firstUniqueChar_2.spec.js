function min(firstSeen, uniqueChars) {
  let minPos = 1000;
  let minChar = undefined;
  uniqueChars.forEach((ch, i) => {
    if (firstSeen[ch] < minPos) {
      minChar = ch;
      minPos = firstSeen[ch];
    }
  });
  return minChar;
}

// O(3N) => O(N)
function _firstUniqueChar(input) {
  let firstSeen = {};
  // O(N)
  for (let i = 0; i < input.length; i++) {
    let ch = input[i];
    if (firstSeen[ch] !== undefined) {
      firstSeen[ch] = -1;
    } else {
      firstSeen[ch] = i;
    }
  }

  // O(N)
  let uniqueChars = Object.keys(firstSeen).filter(k => firstSeen[k] !== -1);

  // O(N)
  return min(firstSeen, uniqueChars);
}


function remove(str, i) {
  let pre = str.substring(0, i);
  let post = str.substring(i+1, str.length);
  return pre + post;
}

function firstUniqueChar(input) {
  // O(N^2)
  for (let i = 0; i < input.length; i++) {
    let c = input[i];  // 1
    let rem = remove(input, i);  // N
    let isUnique = !rem.includes(c); // N
    if (isUnique) {
      return c;
    }
  }
  return undefined;
}

  /*
describe('firstUniqueChar', () => {
  test('"a"', () => {
    const input = "a";
    expect(firstUniqueChar(input)).toEqual("a");
  });
  test('""', () => {
    const input = "";
    expect(firstUniqueChar(input)).toEqual(undefined);
  });
  test('""', () => {
    const input = "";
    expect(firstUniqueChar(input)).toEqual(undefined);
  });
  test('"aa"', () => {
    const input = "aa";
    expect(firstUniqueChar(input)).toEqual(undefined);
  });
  test('"abba"', () => {
    const input = "abba";
    expect(firstUniqueChar(input)).toEqual(undefined);
  });
  test('"abcba"', () => {
    const input = "abcba";
    expect(firstUniqueChar(input)).toEqual("c");
  });

});
*/

describe('_firstUniqueChar', () => {
  test('"a"', () => {
    const input = "a";
    expect(_firstUniqueChar(input)).toEqual("a");
  });
  test('""', () => {
    const input = "";
    expect(_firstUniqueChar(input)).toEqual(undefined);
  });
  test('""', () => {
    const input = "";
    expect(_firstUniqueChar(input)).toEqual(undefined);
  });
  test('"aa"', () => {
    const input = "aa";
    expect(_firstUniqueChar(input)).toEqual(undefined);
  });
  test('"abba"', () => {
    const input = "abba";
    expect(_firstUniqueChar(input)).toEqual(undefined);
  });
  test('"abcba"', () => {
    const input = "abcba";
    expect(_firstUniqueChar(input)).toEqual("c");
  });
});
