/*
 * Let's think backwards,
 *   if you can get the other string by replacing 1 character
 *     - that means they are of the same length
 *   if you can get the other string by adding or removing 1 character
 *     - that means their lengths are differ by 1
 *
 * If 2 strings are of the same length,
 *   - we need to check if we can get the other string by replacing EXACTLY 1 character
 *   - which is the same as: 
 *     - going character by character and keeping track of how many characters are different 
 *     - the difference should be 1
 *
 * If 2 string lengths are differ by 1
 *   - let's find which one is longer and which one is shorter
 *   - then for `longer`, go through all the characters
 *     - we try to remove that chracter from `longer` and see if it is the same as `shorter`
 *     - if it is, return true
 *   - if we go through the whole loop, that means we couldn't find any single character that works
 *      - so we return false
 */
function oneAway(a, b) {
  if (a.length === b.length) {
    // Are they differ by 1 character?
    let diffCount = 0;
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
        diffCount++;
      }
    }
    return diffCount <= 1;
  } else if (Math.abs(a.length - b.length) === 1) {
    // Can we add/remove 1 character to make the two strings the same?
    // Trick: find the longer one, and try REMOVING a character to match the shorter one

    const longer = a.length > b.length ? a : b;
    const shorter = a.length > b.length ? b : a;

    for (let j = 0; j < longer.length; j++) {
      // let's remove longer[j] and compare with shorter
      const removed = longer.slice(0, j) + longer.slice(j+1);
      if (removed === shorter) {
        return true;
      }
    }
    return false;
  }
  // if 2 strings differ in length by more than 1, there's no chance they are 1 edit away
  return false;
}


describe('one away', () => {
  test('"", "" => true', () => {
    expect(oneAway("", "")).toEqual(true);
  });

  test('"a", "" => true', () => {
    expect(oneAway("a", "")).toEqual(true);
  });

  test('"", "a" => true', () => {
    expect(oneAway("", "a")).toEqual(true);
  });

  test('pale, ple => true', () => {
    expect(oneAway("pale", "ple")).toEqual(true);
  });

  test('pales, pale => true', () => {
    expect(oneAway("pales", "pale")).toEqual(true);
  });

  test('pale, bale => true', () => {
    expect(oneAway("pale", "bale")).toEqual(true);
  });

  test('pale, bake => false', () => {
    expect(oneAway("pale", "bake")).toEqual(false);
  });

  test('face, fact => true', () => {
    expect(oneAway("face", "fact")).toEqual(true);
  });

  test('face, facts => false', () => {
    expect(oneAway("face", "facts")).toEqual(false);
  });
});
