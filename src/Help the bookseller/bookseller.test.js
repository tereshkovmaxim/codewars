const stockList = require("./bookseller")


describe('Task: Help the bookseller!', () => {

  test(`["ABAR 200", "CDXE 500", "BKWR 250", "BTSQ 890", "DRTY 600"] - ["A", "B"]; res = (A : 200) - (B : 1140)`, () => {
    let b = ["ABAR 200", "CDXE 500", "BKWR 250", "BTSQ 890", "DRTY 600"];
    let c = ["A", "B"];
    let res = "(A : 200) - (B : 1140)";
    expect(stockList(b, c)).toBe(res);
  });

  test(`["CBART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"] - ["A", "B", "C", "W"]; res = (A : 0) - (B : 114) - (C : 70) - (W : 0)`, () => {
    let b = ["CBART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"];
    let c = ["A", "B", "C", "W"];
    let res = "(A : 0) - (B : 114) - (C : 70) - (W : 0)";
    expect(stockList(b, c)).toBe(res);
  });

})
