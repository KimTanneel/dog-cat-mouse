var Cat = require('./cat.js');
var Mouse = require('./mouse.js');
var Dog = require('./dog.js');
var Mouse1 = new Mouse('Mickey');
var Mouse2 = new Mouse('Jerry');
var tom = new Cat();
// tom.eat(Mouse1);
// console.log(tom);
// console.log(Mouse1);
var husky = new Dog('Husky');
husky.eat(tom);
console.log(husky)