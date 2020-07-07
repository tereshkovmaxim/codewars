function deleteNth(arr, n) {
  let obj = {};
  return arr.filter( val => {
    val in obj ? obj[val] += 1: obj[val] = 1;

    if (obj[val] <= n) return val;
  });
}

module.exports = deleteNth;