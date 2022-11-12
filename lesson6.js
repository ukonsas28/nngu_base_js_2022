//hw
// 7

//"every., -/ hunter #! wishes ;: {} to $ % ^ & * know"

// const charArr = [
//   ".",
//   ",",
//   "-",
//   "/",
//   "#",
//   "!",
//   ";",
//   ":",
//   "{",
//   "}",
//   "$",
//   "%",
//   "^",
//   "&",
//   "*",
// ];
// const removeChar = (str) => {
//   for (let i = 0; i < charArr.length; i += 1) {
//     while (str.includes(charArr[i])) {
//       str = str.replace(charArr[i], "");
//     }
//   }

//   let result = "";

//   for (let i = 0; i < str.length; i += 1) {
//     if (str[i] === " " && str[i - 1] !== " ") {
//       result += str[i];
//     }
//     if (str[i] !== " ") {
//       result += str[i];
//     }
//   }

//   return result;
// };

// console.log(
//   removeChar("каждый., -/ hunter #! wishes ;: {} to $ % ^ & * знать")
// );

//variant 2

// const removeChar = (str) => {
//   let result = "";

//   for (let i = 0; i < str.length; i += 1) {
//     if (/[a-zA-Z]|[а-яА-Я]|[0-9]|\s/.test(str[i])) {
//       result += str[i];
//     }
//   }

//   return result;
// };
// console.log(
//   removeChar("каждый., -/ hunter #! wishes ;: {} to $ % ^ & * знать")
// );

// const initSnake = (str) => {
//   let result = "";

//   for (let i = 0; i < str.length; i += 1) {
//     if (str[i].toUpperCase() === str[i] && i !== 0) {
//       result += `_${str[i].toLowerCase()}`;
//     } else {
//       result += str[i].toLowerCase();
//     }
//   }

//   return result;
// };
// console.log(initSnake("CurrentUserSecondName"));

// const getSubstr = (str, char, pos = "before") => {
//   if (str.includes(char)) {
//     if (pos === "before") {
//       return str.slice(0, str.indexOf(char));
//     }
//     if (pos === "after") {
//       return str.slice(str.indexOf(char));
//     }
//   }
//   return `Символ ${char} отсутствует в строке ${str}`;
// };

// console.log(getSubstr("My name Alex!", "b", "after"));

//cw

// const names = [{ name: "Alex" }, { name: "Ivan" }, { name: "Tony" }];

// const findElem = names.find((el) => el.name === "Tony" || el.name === "Ivan");

// console.log(findElem);

// const names = [{ name: "Alex" }, { name: "Ivan" }, { name: "Tony" }];

// const filterArr = names.filter(
//   (el, i) => (el.name === "Tony" || el.name === "Alex") && i !== 0
// );

// console.log(filterArr);

// const names = [{ name: "Alex" }, { name: "Ivan" }, { name: "Tony" }];

// const mapArr = names.map((el) => ({ name: el.name, handCout: 2 }));

// console.log(mapArr);

// const names = [{ name: "Alex" }, { name: "Ivan" }, { name: "Tony" }];
// console.log(names);

// const arr = names.forEach((el) => (el.name = "Unknown"));

// console.log(arr);
// console.log(names);

// const names = [{ name: "Alex" }, { name: "Ivan" }, { name: "Tony" }];
// console.log(names);

// const arr = names.map(() => ({ name: "Unknown" }));

// console.log(arr);
// console.log(names);

// const arr = [10, -2, -5, 6, 9, -8, -5];

// const result = arr.reduce((prev, cur) => {
//   if (cur > 0) {
//     return prev + cur;
//   }
//   return prev;
// }, 100);

// console.log(result);

// const positiveEvenSum = (arr) =>
//   arr.reduce((prev, cur) => {
//     if (cur % 2 === 0 && cur > 0) {
//       return prev + cur;
//     }
//     return prev;
//   }, 0);

// console.log(positiveEvenSum([1, 2, -3, -4, 5, 6]));

// const positiveEvenSum = (arr) =>
//   arr.filter((el) => el > 0 && el % 2 === 0).reduce((prev, cur) => prev + cur);

// console.log(positiveEvenSum([1, 2, -3, -4, 5, -6]));

// const arr = [1, 2, 1, 3, 4, 5, 2, 3];

function uniqArrItem(itemArray) {
  const result = [];

  for (let i = 0; i < itemArray.length; i += 1) {
    if (!result.includes(itemArray[i])) {
      result.push(itemArray[i]);
    }
  }

  return result;
}

// const uniqResult = uniqArrItem([1, 2, 1, 3, 4, 5, 2, 3]);
// const uniqResult2 = uniqArrItem([1, 1, 1, 1, 1, 1, 1, 1]);
// const uniqResult3 = uniqArrItem([1, 3, 5, 3, 4, 5, 2, 333, 22, 44]);
// console.log(uniqResult);
// console.log(uniqResult2);
// console.log(uniqResult3);

// function uniqArrItem(arr) {
//   return arr.filter(function (el, i) {
//     return !arr.includes(el, i + 1);
//   });
// }

// const uniqArrItem = (arr) =>
//   arr.filter((el, i, array) => !array.includes(el, i + 1));

// const uniqResult = uniqArrItem([1, 2, 1, 3, 4, 5, 2, 3]);
// console.log(uniqResult);

// //3
// const arr_3 = [1, 2, 3];
// const arr_4 = [1, 2, 3];

// const twoArr = (arr1, arr2) =>
//   arr1.length === arr2.length && arr1.every((e, ind) => e === arr2[ind]);

// console.log(twoArr(arr_3, arr_4));
// //3.1
// const compareArr = (arrA, arrB) => {
//   if (arrA.length != arrB.length) return false;
//   for (let i = 0; i < arrA.length; i++) {
//     if (arrA[i] != arrB[i]) return false;
//   }
//   return true;
// };

// 3.2
// const compareArray = (arr1, arr2) => {
//   const str1 = arr1.toString();
//   const str2 = arr2.toString();

//   if (str1.length === str2.length) {
//     return str1 === str2;
//   }
//   return false;
// };

// console.log(["Ivan", "Alex", "Tony"].toString(), typeof [1, 2, 3].toString());
// console.log(["Alex", "Ivan", "Tony"].toString(), typeof [1, 2, 3].toString());
// console.log(compareArray([1, 2, 3], [1, 2, 3]));

// const multiArr = [1, 2, [3, 4, 5, [6, 7, 8]], 9, 10, [11, 12, [13, 14, [15]]]];

// const firstTry = (arr) =>
//   arr
//     .toString()
//     .split(",")
//     .map((el) => +el);

// console.log(firstTry(multiArr));

// const secondTry = (arr) => arr.flat(Infinity);
// console.log(secondTry(multiArr));

// const thirdTry = (arr) => {
//   let haveArr = false;

//   for (let i = 0; i < arr.length; i += 1) {
//     if (Array.isArray(arr[i])) {
//       haveArr = true;
//     }
//   }

//   if (haveArr) {
//     return thirdTry(arr.flat());
//   }

//   return arr;
// };

// console.log(thirdTry(multiArr));

// const number = 1;
// const numberTwo = number;

// console.log(numberTwo);

// const increment = (a) => {
//   a += 1;
// };

// console.log(number, "one");
// increment(number);
// console.log(number, "two");

// const arr = [1, 2, 3, 4];

// const arr2 = arr;

// const arrPush = (arr) => {
//   arr.push(5);
// };

// console.log(arr, "one");
// arrPush(arr);
// console.log(arr, "two");
// console.log(arr2);

// const user = { name: "Alex" };

// const user2 = user;

// user.age = 18;
// user2.name = "Ivan";

// console.log(user);
// console.log(user2);

// const user = { name: "Alex" };

// const user2 = Object.assign({}, user, { favoriteColor: "red", city: "London" });
// const user2 = { ...user, favoriteColor: "red", city: "London" };

// // user.age = 18;
// // user2.name = "Ivan";

// // console.log(user);
// // console.log(user2);

// const arr = [1, 2, 3];

// const arr2 = [...arr];

// arr.push(4);

// console.log(arr);
// console.log(arr2);

// const arr = [1, 2, 3, 4];

// const arrPush = (arr) => {
//   const arrNew = [...arr];
//   arrNew.push(5);
// };

// console.log(arr, "one");
// arrPush(arr);
// console.log(arr, "two");

// const user = { name: "Alex", age: 18 };

// const user2 = JSON.parse(JSON.stringify(user));

// user.name = "Ivan";
// user2.age = 20;

// console.log(user);
// console.log(user2);

// const infinitySum = (a, b, ...arg) => {
//   return a + b + arg.reduce((accum, cur) => accum + cur, 0);
// };

// console.log(infinitySum(1, 23));

// const user = { name: "Alex", age: 18, city: "London" };
// // const user2 = { name: "Ivan", age: 18, city: "London" };

// const userName = user.name;
// const userAge = user.age;
// console.log(userName, "userName");

// const { name, ...restParams } = user;
// // const { name: name2, age: age2 } = user2;
// console.log(name, "name");
// console.log(restParams, "restParams");

// const arraySum = (arr) => {
//   let result = 0;

//   for (let value of arr) {
//     result += value;
//   }

//   return result;
// };

// console.log(arraySum([1, 2, 3, 4, 5, 6, 7, 8]));

// const arr = ["Ivan", "Alex", "Tony"];
// const obj = { name: "Alex", age: 18 };

// for (let value in obj) {
//   console.log(obj[value]);
// }

//Напишите код, который получает из массива чисел новый массив,
//содержащий пары чисел, которые в сумме должны быть равны семи: (0:7), (1:6) и т.д.

// const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// const sumSeven = (arr) => {
//   const result = [];

//   for (let i of arr) {
//     for (let j of arr) {
//       if (i + j === 7 && !result.includes(`${j}:${i}`)) {
//         result.push(`${i}:${j}`);
//       }
//     }
//   }

//   return result;
// };

// console.log(sumSeven(arr));

//Напишите код, создающий массив, который будет состоять из строк, состоящих из предыдущего,
//текущего и следующего символа строки str.

// const str = "JavaScript";

// const strSymbols = (str) => {
//   const result = [];

//   const { length } = str;

//   for (let i = 0; i < length; i += 1) {
//     if (i === 0) {
//       result.push(str.slice(0, 2));
//     } else if (i === length - 1) {
//       result.push(str.slice(-2));
//     } else {
//       result.push(str.slice(i - 1, i + 2));
//     }
//   }

//   return result;
// };

// console.log(strSymbols(str));

// const user = { name: "Alex", age: "26", city: "NN" };

// const userName = user.name;
// const userAge = user.age;

// const { name, ...restObj } = user;

// console.log(userName, userAge, restObj);

//Напишите код, объединяющий три массива цифр, и располагающий цифры, в полученном массиве,
// в порядке убывания их значений через пробел.

// const arr1 = [1, 2, 3];
// const arr2 = [7, 8, 9];
// const arr3 = [4, 5, 6];

// const sortArr = (arr1, arr2, arr3) =>
//   [...arr1, ...arr2, ...arr3]
//     .sort((a, b) => b - a)
//     .join(" ")
//     .split();

// console.log(sortArr(arr1, arr2, arr3));

//Дан массив с числами. Не используя метода reverse переверните его элементы в обратном порядке.

// const arr = [1, 2, 3, 45, 5, 6, 7, 85, 9];

// const customReverce = (arr) => {
//   const result = [];

//   for (let value of arr) {
//     result.unshift(value);
//   }
//   return result;
// };

// console.log(customReverce(arr));

//Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить,
//чтобы в сумме получилось больше 10-ти.

// const arr = [10, 2, 3, 4, -5, 6, 7, 8, 9];

// const sumMoreTen = (arr) => {
//   let lastIndex;
//   arr.reduce((prev, cur, index) => {
//     if (prev + cur <= 10) {
//       lastIndex = index;
//       return prev + cur;
//     }
//   }, 0);

//   if (lastIndex === 0) {
//     return lastIndex + 1;
//   }
//   if (typeof lastIndex === "undefined") {
//     return 1;
//   }
//   return lastIndex + 2;
// };

// console.log(sumMoreTen(arr));

//Имеется массив простых чисел: numbers = [2, 3, 5, 7, 11, 13, 17, 19].
// Использую метод reduce() напишите функцию currentSums(numbers),
//которая возвращает новый массив из такого же числа элементов, в котором
//на каждой позиции будет находиться сумма
// элементов массива numbers до этой позиции включительно.

// const numbers = [0, 2, 3, 5, 7, 11, 13, 17, 19, 23];
// const currentSums = (arr) => {
//   const result = [];

//   arr.reduce((prev, cur) => {
//     result.push(prev + cur);
//     return prev + cur;
//   }, 0);

//   return result;
// };

// console.log(currentSums(numbers));

// const numbers = [2, 3, 5, 7, 11, 13, 17, 19];

// const currentSums = (numbers) => {
//   let result = [];
//   numbers.reduce((pre, cur, ind) => (result[ind] = pre + cur), 0);
//   return result;
// };

// console.log(currentSums(numbers));


