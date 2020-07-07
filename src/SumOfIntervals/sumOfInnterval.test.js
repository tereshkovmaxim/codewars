const sumIntervals = require('./sumOfIntervls');

describe('Sum of Intervals', () => {

  let test1 = [[1,5]];
  let test2 = [[1,5],[6,10]];
  var test3 = [[1,5],[1,5]];
  var test4 = [[1,4],[7, 10],[3, 5]];

  test(`${test1} => 4`, () => expect(sumIntervals(test1)).toBe(4));

  test(`${test2} => 8`, () => expect(sumIntervals(test2)).toBe(8));

  test(`${test3} => 4`, () => expect(sumIntervals(test3)).toBe(4));

  test(`${test4} => 7`, () => expect(sumIntervals(test4)).toBe(7));

});