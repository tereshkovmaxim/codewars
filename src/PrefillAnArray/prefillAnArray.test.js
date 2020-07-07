const prefill = require('./prefillAnArray');

describe('Prefill an Array', () => {

  test(`prefill(3, 1) => [1, 1, 1]`, () => expect(prefill(3, 1)).toEqual([1, 1, 1]));

  test(`prefill(2, 'abc') => ['abc', 'abc']`, () => expect(prefill(2, 'abc')).toEqual(['abc', 'abc']));

  test(`prefill('1', 1) => [1]`, () => expect(prefill('1', 1)).toEqual([1]));

  test(`prefill(3, prefill(2, '2d')) => [['2d', '2d'], ['2d', '2d'], ['2d', '2d']]`, () => expect(prefill(3, prefill(2, '2d'))).toEqual([['2d', '2d'], ['2d', '2d'], ['2d', '2d']]));

  test(`n is invalid`, () => {
    let errorThrow = false;
    try {
      prefill('xyz', 1);
    } catch(e) {
      expect(e.name).toBe('TypeError');
      expect(e.message).toBe('xyz is invalid');
      errorThrow = true;
    }
    expect(errorThrow);
  });

  test(`n is not integer`, () => {
    let errorThrow = false;
    try {
      prefill('3.7872', 1);
    } catch(e) {
      expect(e.name).toBe('TypeError');
      expect(e.message).toBe('3.7872 is invalid');
      errorThrow = true;
    }
    expect(errorThrow);
  });

  test('negative n', () => {
    let errorThrow = false;
    try {
      prefill('-2', 1);
    } catch(e) {
      expect(e.name).toBe('TypeError');
      expect(e.message).toBe('-2 is invalid');
      errorThrow = true;
    }
    expect(errorThrow);
  });

});