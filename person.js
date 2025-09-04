class Person {
  constructor(name) {
    this.name = name;
  }

  sayMyName() {
    return `Hello name is ${this.name}!`;
  }
}

module.exports = {
  Person,
}