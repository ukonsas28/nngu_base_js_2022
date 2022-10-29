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

const getSubstr = (str, char, pos = "before") => {
  if (str.includes(char)) {
    if (pos === "before") {
      return str.slice(0, str.indexOf(char));
    }
    if (pos === "after") {
      return str.slice(str.indexOf(char));
    }
  }
  return `Символ ${char} отсутствует в строке ${str}`;
};

console.log(getSubstr("My name Alex!", "b", "after"));
