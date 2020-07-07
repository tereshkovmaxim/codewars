const score = require("./greed");

describe('Greed', () => {
  test(`[1, 1, 1, 1, 1] => 1200`, () => expect(score([1, 1, 1, 1, 1])).toBe(1200));
  test(`[2, 2, 2, 2, 2] => 200`, () => expect(score([2, 2, 2, 2, 2])).toBe(200));
  test(`[3, 3, 3, 3, 3] => 300`, () => expect(score([3, 3, 3, 3, 3])).toBe(300));
  test(`[4, 4, 4, 4, 4] => 400`, () => expect(score([4, 4, 4, 4, 4])).toBe(400));
  test(`[5, 5, 5, 5, 5] => 600`, () => expect(score([5, 5, 5, 5, 5])).toBe(600));
});
