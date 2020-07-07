/**
 * Write a function called sumIntervals/sum_intervals() that accepts an array of intervals, and returns the sum of all the interval lengths. 
 * Overlapping intervals should only be counted once.
 * Intervals
 * Intervals are represented by a pair of integers in the form of an array. 
 * The first value of the interval will always be less than the second value. Interval example: [1, 5] is an interval from 1 to 5. 
 * The length of this interval is 4.
 * Overlapping Intervals
 * List containing overlapping intervals:
 * [ [1, 4], [7, 10], [3, 5] ]
 */
function sumIntervals(intervals) {
  intervals.sort( (a, b) => a[0] - b[0] );

  let res = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    if (res[res.length-1][1] > intervals[i][0]) {
      res[res.length-1][1] = Math.max(res[res.length-1][1], intervals[i][1]);
    } else {
      res.push(intervals[i]);
    }
  }

  return res.reduce( (acc, cur) => acc+=(cur[1] - cur[0]), 0);
}

module.exports = sumIntervals;


