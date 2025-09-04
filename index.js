const { Person } = require('./person');
require('./modules/path');

const person = new Person('Pedro Ferreira ');

console.log(person.sayMyName());