/**
 * Greed is a dice game played with five six-sided dice. 
 * Your mission, should you choose to accept it, is to score a throw according to these rules. 
 * You will always be given an array with five six-sided dice values.
 *  Three 1's => 1000 points
 * Three 6's =>  600 points
 * Three 5's =>  500 points
 * Three 4's =>  400 points
 * Three 3's =>  300 points
 * Three 2's =>  200 points
 * One   1   =>  100 points
 * One   5   =>   50 point
 * A single die can only be counted once in each roll. 
 * For example, a given "5" can only count as part of a triplet (contributing to the 500 points) or as a single 50 points, but not both in the same roll.
 */
function score(dice) {
  let one = { 
    1: 1,
    5: 0.5,
  }

  let three = {
    1: 10,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
  }

  let arr = [0, 0, 0, 0, 0, 0, 0];
  dice.forEach( v => arr[v]++ );
  let result = 0;

  let i = 1;
  while (i < 7) {
    if (arr[i] >= 3) {
      result += three[i] * 100;
      arr[i] -= 3;
    }
    result += arr[i] * ((one[i] ? one[i] : 0) * 100);
    i++;
  }

  return result;
}

module.exports = score;