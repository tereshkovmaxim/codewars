/**
 * Complete the method which returns the number which is most frequent in the given input array. 
 * If there is a tie for most frequent number, return the largest number among them.
 * Note: no empty arrays will be given.
 */
function highestRank(arr) {
  let res = arr.reduce( (acc, cur) => ({...acc, [cur]: (acc[cur] || 0) + 1}), {})
  return +Object.entries(res).reduce( (max, cur) => max[1] > cur[1] ? max : cur, [])[0];
}

module.exports = highestRank;