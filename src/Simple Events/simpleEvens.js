/**
 * Your goal is to write an Event constructor function, which can be used to make event objects
 * An event object should work like this:
 * -it has a .subscribe() method, which takes a function and stores it as its handler
 * -it has an .unsubscribe() method, which takes a function and removes it from its handlers
 * it has an .emit() method, which takes an arbitrary number of arguments and calls all the stored functions with these arguments
 */
function Event() {
  this.handlers = [];
}

Event.prototype.subscribe = function(fn) {
  if( this.handlers.indexOf(fn) > -1 ) return;
  this.handlers.push(fn);
};
Event.prototype.unsubscribe = function(fn) {
  let index = this.handlers.indexOf(fn);
  this.handlers.splice(index, 1);
};
Event.prototype.emit = function(...args) {
  this.handlers.forEach( v => v(...args) );
}

module.exports = Event;