/**
 * Using closures to share class state
 * In this kata, I want you to write make a Cat constructor that takes arguments name and weight to instantiate a new cat object. 
 * The constructor should also have an averageWeight method that returns the average weight of cats created with the constructor.
 * https://www.codewars.com/kata/53583765d5493bfdf5001b35
 */
let Cat = (function() {
  const cats = [];

  function Cat(name, weight) {
    if (!name || !weight)
      throw new Error('Invalid parametr');

    Object.defineProperty(this, 'weight', {
      get() {
        return this._weight;
      },
      set(value) {
        this._weight = value;
      }
    });

    this.name = name;
    this.weight = weight;
    cats.push(this);
  }

  Cat.averageWeight = function() {
    return cats.reduce( (sum, cur) => sum += cur.weight, 0) / cats.length;
  };

  return Cat;
}());

module.exports = Cat;