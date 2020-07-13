const Event = require('./simpleEvens');

describe('Simple Events', () => {
  const event = new Event();

  function f() {
    f.calls = (f.calls || 0) + 1;
    f.args = Array.prototype.slice.call(arguments);
  }

  test(`Subscribe event`, () => {
    event.subscribe(f);
    event.emit(1, 'foo', true); 
    expect(f.calls).toBe(1);
    expect(f.args).toEqual([1, 'foo', true]); 
  });

  test(`Unsubscribe event`, () => {
    event.unsubscribe(f);
    event.emit(2);
    expect(f.calls).toBe(1);
  });
});