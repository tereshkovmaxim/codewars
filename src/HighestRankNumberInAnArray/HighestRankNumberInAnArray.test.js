const highestRank = require('./HighestRankNumberInAnArray');

describe('Highest Rank Number in an Array', () => {

  test(`[12, 10, 8, 12, 7, 6, 4, 10, 12] => 12`, () => expect(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12])).toBe(12));

  test(`[12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10] => 3`, () => expect(highestRank([12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10])).toBe(3));

});