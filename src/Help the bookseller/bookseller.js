/**
 * A bookseller has lots of books classified in 26 categories labeled A, B, ... Z. Each book has a code c of 3, 4, 5 or more characters. 
 * The 1st character of a code is a capital letter which defines the book category.
 * In the bookseller's stocklist each code c is followed by a space and by a positive integer n (int n >= 0) which indicates the quantity of books of this code in stock.
 * If L or M are empty return string is "".
 */
function stockList(listOfArt, listOfCat) {
  if (listOfArt.length == 0 || listOfCat.length == 0) return '';
  let arr = [];

  listOfCat.forEach( v => {
    let regexp = new RegExp(`^${v}`);
    let art = listOfArt.reduce( (sum, val) => regexp.test(val) ? sum += +val.match(/\d+/)[0] : sum += 0, 0 );
    arr.push(`(${v} : ${art})`);
  } );

  return arr.join(' - ');
}

module.exports = stockList;