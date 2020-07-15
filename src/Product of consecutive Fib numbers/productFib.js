/**
 * Given a number, say prod (for product), we search two Fibonacci numbers F(n) and F(n+1) verifying
 * F(n) * F(n+1) = prod.
 * Your function productFib takes an integer (prod) and returns an array:
 * [F(n), F(n+1), true] or {F(n), F(n+1), 1} or (F(n), F(n+1), True)
 * If you don't find two consecutive F(m) verifying F(m) * F(m+1) = prodyou will return
 * [F(m), F(m+1), false] or {F(n), F(n+1), 0} or (F(n), F(n+1), False)
 * F(m) being the smallest one such as F(m) * F(m+1) > prod.
 */
function productFib(prod) {
  let prev = 0;
  let cur = 1;
  let mul = cur * prev;

  while(mul < prod) {
    let temp = cur;
    cur += prev;
    prev = temp;
    mul = cur * prev;
  }

  return [prev, cur, mul == prod ? true : false ];
}

module.exports = productFib;