function reverse(string) {
  return [...string].reverse().join("");
}

function filterCharacters(string) {
  return [...string]
    .filter(ch => /[a-z]/.test(ch))
    .join("");
}

function lowercase(string) {
  return string.toLowerCase();
}

function palidrome(string) {
  const trimmed = filterCharacters(lowercase(string));
  const reversed = reverse(trimmed);

  //  console.log(trimmed);
  return trimmed === reversed;
}

describe('palidrome', () => {
  test('palidrome with odd number of characters', () => {
    const result = palidrome("mom");
    expect(result).toEqual(true);
  });
  test('palidrome with even number of characters', () => {
    const result = palidrome("noon");
    expect(result).toEqual(true);
  });

  test('not palidrome', () => {
    const result = palidrome("mood");
    expect(result).toEqual(false);
  });

  test('palidrome with spaces', () => {
    const result = palidrome("never odd or even   ");
    expect(result).toEqual(true);
  });

  test('palidrome with uppercase', () => {
    const result = palidrome("Hello olleh");
    expect(result).toEqual(true);
  });

  test('palidrome with empty string', () => {
    const result = palidrome("");
    expect(result).toEqual(true);
  });

  test('palidrome with single character', () => {
    const result = palidrome("a");
    expect(result).toEqual(true);
  });

  test('palidrome with non-character', () => {
    const result = palidrome("!@#$%^&*()");
    expect(result).toEqual(true);
  });

});
