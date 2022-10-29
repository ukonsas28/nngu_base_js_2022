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

function uniqArrItem(arr) {
  return arr.filter(function (el, i) {
    return !arr.includes(el, i + 1);
  });
}

const uniqArrItem = (arr) =>
  arr.filter((el, i, array) => !array.includes(el, i + 1));

const uniqResult = uniqArrItem([1, 2, 1, 3, 4, 5, 2, 3]);
console.log(uniqResult);
