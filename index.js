var Cat = require('./cat.js');
var Mouse = require('./mouse.js');

var Mouse1 = new Mouse('Mickey');
var Mouse2 = new Mouse('Jerry');
var tom = new Cat();
tom.eat(Mouse1);
console.log(Cat);