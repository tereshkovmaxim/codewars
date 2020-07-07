const kebabize = require("./kebabize");

describe('Kebabize', () => {

  test(`'camelsHaveThreeHumps' => 'camels-have-three-humps'`, () => {
    expect(kebabize('camelsHaveThreeHumps')).toBe('camels-have-three-humps')
  });

  test(`'myCamelCasedString' => 'my-camel-cased-string'`, () => {
    expect(kebabize('myCamelCasedString')).toBe('my-camel-cased-string');
  });

  test(`'camelsHave3Humps' => 'camels-have-humps'`, () => {
    expect(kebabize('camelsHave3Humps')).toBe('camels-have-humps');
  });

  test(`'myCamelHas3Humps' => 'my-camel-has-humps'`, () => {
    expect(kebabize('myCamelHas3Humps')).toBe('my-camel-has-humps');
  });

  test(`'2334R' => r`, () => {
    expect(kebabize('2334R')).toBe('r');
  });

  test(`'Br0Uo' => 'br-uo'`, () => {
    expect(kebabize('Br0Uo')).toBe('br-uo');
  });

});