const decipherThis = require("./decipherThis");

describe('Decipher this', () => {

  test(`'72olle 103doo 100ya' => 'Hello good day'`, () => {
    expect(decipherThis('72olle 103doo 100ya')).toBe('Hello good day'); 
  });

  test(`'82yade 115te 103o' => 'Ready set go'`, () => {
    expect(decipherThis('82yade 115te 103o')).toBe('Ready set go'); 
  });

  test(`'72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o' => 'Have a go at this and see how you do'`, () => {
    expect(decipherThis('72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o')).toBe('Have a go at this and see how you do'); 
  });
  
});