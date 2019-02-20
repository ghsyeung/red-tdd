function compressFor(string) {
  let buffer = "";
  let i = 0;
  while (i < string.length) {
    let j = i;
    while (j < string.length && string[j] === string[i]) {
      j++;
    }
    buffer += string[i] + (j - i);
    i = j;
  }
  return buffer;
}


function compress(string) {
  return [...string].reduce((buffer, x) => {
    // buffer = the compressed string up the current point
    // e.g. "aabb", 
    //       buffer = "a1" after reading "a"
    //       buffer = "a2" after reading "aa"
    //       buffer = "a2b1" after reading "aab"
    //       buffer = "a2b2" after reading "aabb"
    if (buffer.length === 0 || buffer[buffer.length - 2] !== x) {
      return buffer + x + 1;
    } else {
      const count = parseInt(buffer[buffer.length - 1]) + 1;
      return buffer.substr(0, buffer.length - 2) + x + count;
    }
  }, "");
}

describe('compress', () => {
  test('"a"', () => {
    const compressed = compress("a");
    expect(compressed).toEqual("a1");
  });
  test('"aaa"', () => {
    const compressed = compress("aaa");
    expect(compressed).toEqual("a3");
  });
  test('"aabb"', () => {
    const compressed = compress("aabb");
    expect(compressed).toEqual("a2b2");
  });
  test('"abab"', () => {
    const compressed = compress("abab");
    expect(compressed).toEqual("a1b1a1b1");
  });
  test('""', () => {
    const compressed = compress("");
    expect(compressed).toEqual("");
  });
});
