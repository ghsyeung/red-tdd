function minimal1(input) {
  let min = 1;
  while (input.some(i => i === min)) {
    min++;
  }
  return min;
}

function minimal2(input) {
  const counted = input.reduce((a, x) => { 
    a[x] = (a[x] || 0) + 1; 
    return a; 
  }, {});
  let uniqueNumbers = Object.keys(counted).length;

  let min = 1;
  while (min <= uniqueNumbers) {
    if (!counted[min]) {
      return min;
    }
    min++;
  }
  return min;
}

const minimal = minimal2;

describe('minimal positive', () => {
  test('[] => 1', () => {
    expect(minimal([])).toEqual(1);
  });

  test('[1] => 2', () => {
    expect(minimal([1])).toEqual(2);
  });

  test('[2] => 1', () => {
    expect(minimal([2])).toEqual(1);
  });

  test('[1, 3, 5, 4, 1, 2] => 6', () => {
    expect(minimal([1, 3, 5, 4, 1, 2])).toEqual(6);
  });

  test('[1, 3, 6, 4, 1, 2] => 5', () => {
    expect(minimal([1, 3, 6, 4, 1, 2])).toEqual(5);
  });

});
