// function showMessage(message) {
//   console.log(message);
// }

// showMessage("Hi");

// showMessage("Hello");

// showMessage("Привет");

// showMessage("Как дела?");

// function sum(a = 0, b) {
//   console.log(a + b);
// }
// sum(2, 3);
// sum(2, 0);
// sum(2);

// function sum(a, b) {
//   return a + b;
// }

// const result = sum(3, 5);

// console.log(result);
// console.log(sum(4, 6));

// function positiveSum(a, b) {
//   if (a > 0 && b > 0) {
//     return a + b;
//   }
//   return 0;
// }
// console.log(positiveSum(2, 3));
// console.log(positiveSum(-2, 3));

// function getName() {
//   const userName = "Alex";
//   return userName;
// }

// function getUserName() {
//   console.log("userName");
// }

// // console.log(getName());
// console.log(getUserName());

// let name = "Alex";

// function sayHello(message = "Hello") {
//   name = "Ivan";
//   console.log(`${message} - ${name} !!`);
// }
// console.log(name);
// sayHello();
// console.log(name);

// function sum(a, b = 3) {
//   const result = a + b;
//   console.log(result);
// }

// sum(2);
// sum(2);
// sum(2);
// sum(2);
// sum(2);
// sum(2);
// sum(2);
// sum(2);

// function greeting(userName = "Guest") {
//   console.log(`Hello - ${userName}`);
// }
// greeting("Ivan");
// greeting("Kate");
// greeting("");
// greeting();
// greeting(3);

// function stepen(a, b = 1) {
//   console.log(a ** b);
// }
// stepen(2, 10);

// const sayHello = function (name) {
//   console.log(`Hello ${name}`);
// };

// const funcExample = function (callback) {
//   for (let i = 0; i < 10000000000; i += 1) {}
//   callback("Alex");
// };
// sayHello("Ivan");
// funcExample("");

// sum(1, 2);

// function sum(a, b) {
//   console.log(a + b);
// }

// const multiply = function (a, b) {
//   console.log(a * b);
// };
// multiply(3, 4);

// const getName = (name) => `Name-${name}`;

// console.log(getName("Alex"));
// console.log(getName("Ivan"));

// const getNameTwo = (name) => {
//   return `Name-${name}`;
// };

// const quadro = (a) => a ** 2;

// console.log(quadro(3));

// const showString = (str, n) => {
//   for (let i = 0; i < n; i += 1) {
//     console.log(str);
//   }
// };

// showString("Hello World", 2);
// showString("Привет МИР", 5);

const isVowel = (letter) => {
  if (
    letter === "а" ||
    letter === "у" ||
    letter === "о" ||
    letter === "ы" ||
    letter === "э" ||
    letter === "я" ||
    letter === "ю" ||
    letter === "и" ||
    letter === "е"
  ) {
    return true;
  }
  return false;
};
console.log(isVowel("и"));
console.log(isVowel("д"));
