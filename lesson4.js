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

// const isVowel = (letter) => {
//   if (
//     letter === "а" ||
//     letter === "у" ||
//     letter === "о" ||
//     letter === "ы" ||
//     letter === "э" ||
//     letter === "я" ||
//     letter === "ю" ||
//     letter === "и" ||
//     letter === "е"
//   ) {
//     return true;
//   } else {
//     return false;
//   }
// };

// const a = isVowel("и");

// if (isVowel("и")) {
//   console.log("good");
// } else {
//   console.log("no good");
// }

//HOME WORK

//10

const getDigitsSum = (num) => {
  const str = `${num}`;
  let result = 0;

  for (let i = 0; i < str.length; i += 1) {
    result += +str[i];
  }

  return result;
};

// console.log(getDigitsSum(123));

//11

const filterYears = () => {
  const result = [];
  for (let i = 1; i < 2020; i += 1) {
    if (getDigitsSum(i) === 13) {
      result.push(i);
    }
  }

  return result;
};

// console.log(filterYears());

//12

const isEven = (num) => {
  if (num % 2 === 0) {
    return true;
  }
  return false;
};

// console.log(isEven(7));
// console.log(isEven(12));

//13

const filterArr = (arr) => {
  const result = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (isEven(arr[i])) {
      result.push(arr[i]);
    }
  }

  return result;
};

// console.log(filterArr([1, 2, 3, 4, 5, 6, 7, 8, 9]));

//15
const lessNine = (num) => {
  console.log(`Функция lessNine вызванна с параметром ${num}`);
  if (getDigitsSum(num) > 9) {
    return lessNine(getDigitsSum(num));
  }
  return getDigitsSum(num);
};

console.log(lessNine(156957565523));

//15 второе решение

const sumDigital = (n) => {
  let newn = getDigitsSum(n);
  while (newn >= 10) {
    newn = getDigitsSum(newn);
  }
  return newn;
};

console.log(sumDigital(11973));
