const Cat = require('./cat');

describe('Using closures to share class state', () => {

  test(`test`, () => {
    let fluffy = new Cat('fluffy', 15);
    let garfield = new Cat('garfield', 25);

    expect(fluffy.weight).toBe(15);
    expect(fluffy instanceof Cat).toBe(true);
    expect(fluffy.averageWeight).toBe(undefined);
    expect(typeof Cat.averageWeight).toBe('function');
    expect(Cat.averageWeight()).toBe(20);
  });

});