// function example() {
//   console.log("this", this);
// }

// const test = () => {
//   console.log("this", this);
// };

// const testObject = {
//   testMethod: test,
// };

// const exampleObj = {
//   exampleMetod: test,
//   exampleValue: "@###",
// };

// test();
// testObject.testMethod();
// exampleObj.exampleMetod();

// const persona = {
//   name: "Alex",
//   age: "26",
//   getName: function () {
//     console.log(this.name);
//   },
// };

// persona.getName();

// const town = {
//   name: "Moscow",
//   population: "25 mln",
//   getName: function () {
//     console.log(this.name);
//     return this.name;
//   },
//   getPopulation: function () {
//     console.log(this.population);
//     return this.population;
//   },

//   setAnyValue: function (key, value) {
//     this[key] = value;
//   },
// };

// town.getName();
// town.setAnyValue("name", "London");
// town.setAnyValue("country", "UK");
// town.getName();

// console.log(town);

// const user1 = { name: "Vasya", surName: "Ivanov" };
// const user2 = { name: "Petya", surName: "Semenov" };
// const user3 = { name: "Alex" };

// function greeting(phrase, smile, ...args) {
//   console.log(args);
//   console.log(`${this.name} ${this.surName} : ${phrase} : ${smile}`);
// }

// // greeting("hi");

// // greeting.call(user1, "Привет", "^_^");
// // greeting.call(user2, "Hello", "*_*");
// // greeting.apply(user3, ["Привет", ")))"]);

// // const greetingUser1 = greeting.bind(user1, "Привет", "^_^");

// // greetingUser1();

// const greetingUser2 = greeting.bind(user2, "Hello");
// const greetingUser22 = greeting.bind(user2, "Bye");
// // const greetingUser22 = greeting.bind(user2, "Привет", "))))");
// // greetingUser22();

// greetingUser2("noBody", ")))");
// greetingUser2(":)");
// greetingUser2("((");

// greetingUser22("*_*");
// greetingUser22(":)");
// greetingUser22("((");

const town = {
  name: "Moscow",
  population: "25 mln",
  getName: function () {
    console.log(this.name);
    return this.name;
  },
  getPopulation: function () {
    console.log(this.population);
    return this.population;
  },
  setAnyValue: function (key, value) {
    this[key] = value;
  },
};

const townTwo = {
  name: "London",
  population: "5 mln",
};
console.log(townTwo);

town.getName();
town.getPopulation();
town.getName.call(townTwo);
town.getPopulation.call(townTwo);

const bound = town.setAnyValue.bind(townTwo);

bound("name", "Paris");
bound("country", "France");

console.log(townTwo);
