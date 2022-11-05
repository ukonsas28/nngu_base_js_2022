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

const arr = [1, 2, 3, 4];

const arrPush = (arr) => {
  const arrNew = [...arr];
  arrNew.push(5);
};

console.log(arr, "one");
arrPush(arr);
console.log(arr, "two");

const user = { name: "Alex", age: 18 };

const user2 = JSON.parse(JSON.stringify(user));

user.name = "Ivan";
user2.age = 20;

console.log(user);
console.log(user2);
