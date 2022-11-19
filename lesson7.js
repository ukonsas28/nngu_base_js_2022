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

// const townTwo = {
//   name: "London",
//   population: "5 mln",
// };
// console.log(townTwo);

// town.getName();
// town.getPopulation();
// town.getName.call(townTwo);
// town.getPopulation.call(townTwo);

// const bound = town.setAnyValue.bind(townTwo);

// bound("name", "Paris");
// bound("country", "France");

// console.log(townTwo);

// const cubeValue = (a) => {
//   return (b, c) => {
//     return a * b * c;
//   };
// };

// const first = cubeValue(10);

// console.log(first(10, 10));
// console.log(first(2, 5));
// console.log(first(5, 7));

// const second = cubeValue(4);

// const test = (a, b, c) => a * b * c;

// console.log(second(4, 10, 10));
// console.log(second(4, 2, 5));
// console.log(second(4, 5, 7));

// const cubeValue = (a, b, c) => a * b * c;

// console.log(cubeValue(1, 3, 3));

// const cubeCaryValue = (a) => {
//   return (b) => {
//     return (c) => {
//       return a * b * c;
//     };
//   };
// };

// const cubeCaryValueVar2 = (a) => () => {
//   //some logic a
// };

// console.log(cubeCaryValue(1)(3)(3));

// const twoArgs = cubeCaryValue(1)(3);

// console.log(twoArgs(3));
// console.log(twoArgs(4));
// console.log(twoArgs(5));

// function askPassword(ok, fail) {
//   let password = prompt("Password?", "");
//   if (password == "1234") ok();
//   else fail();
// }

// let user = {
//   name: "Вася",

//   loginOk() {
//     alert(`${this.name} logged in`);
//   },

//   loginFail() {
//     alert(`${this.name} failed to log in`);
//   },
// };

// askPassword(user.loginOk.bind(user), user.loginFail.bind(user));

// function askPassword(ok, fail) {
//   let password = prompt("Password?", "");
//   if (password == "1234") ok();
//   else fail();
// }

// let user = {
//   name: "John",

//   login(result) {
//     alert(this.name + (result ? " logged in" : " failed to log in"));
//   },
// };

// askPassword(user.login.bind(user, true), user.login.bind(user, false));

const elem = { value: "Пока" };

function func(surname, name) {
  alert(`${this.value}, ${surname}, ${name}`);
}

func.call(elem, "Петров", "Петр");

// func.bind(elem)("Иванов", "Иван");
