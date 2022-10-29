const key = "firstName";

const person = {
  [key]: "Alex",
};

person.age = 56;

person["city-name"] = "NN";

person[4] = 4;

// console.log(person.firstName);
// console.log(person["city-name"]);

// console.log(person.age);

person.age = 26;

// console.log(person.age);

// console.log(person.height);
// person.height = 193;
// console.log(person.height);

// delete person.age;
// console.log(person.age);

// const sayHello = function () {
//   console.log("Привет я ALEX");
// };

// person.sayHello = sayHello;

// person.sayHello();

// const number = 100;

// console.log(number.toString());

// const str = "hello world";
// const newStr = "Hello world";
// console.log(str[70]);

const isUpperCase = (str, i) => {
  if (i > str.length) {
    return "ОШИБКА ТАКОГО ИНДЕКСА НЕТ";
  }
  if (str[i] === str[i].toUpperCase()) {
    return true;
  }
  return false;
};

console.log(isUpperCase("AbcdEGRT", 6));
console.log(isUpperCase("FFFFJdddv", 6));
console.log(isUpperCase("asdfvnfhEDFFDFD", 90));
