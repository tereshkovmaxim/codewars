const productFib = require('./productFib');

describe('Product of consecutive Fib numbers', () => {

  test(`productFib(4895) => [55, 89, true]`, () => {
    expect(productFib(4895)).toEqual([55, 89, true]);
  });

  test(`productFib(5895) => [89, 144, false]`, () => {
    expect(productFib(5895)).toEqual([89, 144, false]);
  });

});