function frogJumps(start, end, jump) {
  if (end < start || jump <= 0) {
    return undefined;
  }
  return Math.ceil((end - start) / jump);
}

describe('frogJumps', () => {
  describe('invalid arguments', () => {
    test.skip('no arguments', () => {
      const result = frogJumps();
      expect(result).toEqual(undefined);
    });
  });
  test('when start is equal to end', () => {
    const result = frogJumps(10, 10, 5);
    expect(result).toEqual(0);
  });
  describe('start less than end', () => {
    test('jump is not divisible by distance', () => {
      const result = frogJumps(0, 10, 3);
      expect(result).toEqual(4);
    });
    test('jump is divisible by distance', () => {
      const result = frogJumps(0, 9, 3);
      expect(result).toEqual(3);
    });
  });
  test('when end < start', () => {
    const result = frogJumps(10, 0, 10);
    expect(result).toEqual(undefined);
  });
  test('when jump is negative', () => {
    const result = frogJumps(0, 10, -1);
    expect(result).toEqual(undefined);
  });
  test('when jump is zero', () => {
    const result = frogJumps(0, 10, 0);
    expect(result).toEqual(undefined);
  });

});
