var module1 = require('./src/module1.js');
var module2 = require('./src/module2.js');

module1.counter.setTicks(1000);
//module1.counter.counter.setTicks(1000);
console.log(module1, module2);

module1.counter.setTicks(2999);
module1.sharedName = 'Pavle';
console.log(module1, module2);