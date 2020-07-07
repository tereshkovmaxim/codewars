const deleteNth = require('./delete');

describe('Delete', () => {

  test(`deleteNth ([1,1,1,1],2) => [1, 1]`, () => expect(deleteNth([1, 1, 1, 1], 2)).toEqual([1, 1]));

  test(`deleteNth ([20,37,20,21],1) => [20, 37, 21]`, () => expect(deleteNth([20,37,20,21],1)).toEqual([20, 37, 21]));

  test(`deleteNth([1,1,3,3,7,2,2,2,2], 3) => [1, 1, 3, 3, 7, 2, 2, 2]`, () => {
    expect(deleteNth([1,1,3,3,7,2,2,2,2], 3)).toEqual([1, 1, 3, 3, 7, 2, 2, 2]);
  });

});