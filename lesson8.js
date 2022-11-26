// const user = {
//   name: "Alex",
// };

// console.log(user);

// const arr = [1, 2];
// console.log(arr);

// console.log(new String());

// const obj = {
//   city: "NN",
// };

// const russian = {
//   country: "Russia",
//   city: "London",
// };

// const people = {
//   name: "Alex",
//   age: 26,
// };

// console.log(people.city);

// const name = "Alex";

// const user = {
//   name,
// };

// const { name: userName } = user;
// console.log(userName);

// if (true) {
//   console.log("true");
// }

// if (false) console.log("true2");

// function CreateUser(userName, userAge) {
//   this.name = userName;
//   this.age = userAge;

//   this.sayHi = function () {
//     console.log(`Привет, меня зовут ${this.name}`);
//   };
// }

// CreateUser.prototype.sayAge = function () {
//   console.log(`Мне ${this.age}`);
// };

// const firstUser = new CreateUser("Alex", 26);
// const secondUser = new CreateUser("Tony", 24);
// const thirdUser = new CreateUser("Ivan", 15);

// console.log(firstUser);
// console.log(secondUser);
// console.log(thirdUser);

// secondUser.sayHi();
// secondUser.sayAge();

// function CreatePostCard(from, to) {
//   this.from = from;
//   this.to = to;

//   this.show = function () {
//     console.log(`Откртытка от ${this.from} для ${this.to}`);
//   };
// }

// CreatePostCard.prototype.setFrom = function (from) {
//   this.from = from;
// };

// const firstPost = new CreatePostCard("Alex", "Liza");
// const secondPost = new CreatePostCard("Tony", "Kate");

// firstPost.show();
// secondPost.show();

// firstPost.setFrom("Ivan");
// firstPost.show();
// console.log(firstPost);

class People {
  constructor(name, surName) {
    this.name = name;
    this.surName = surName;
  }

  getFullName() {
    return `${this.name} : ${this.surName}`;
  }
}

const firstPeople = new People("Alex", "Ivanov");

console.log(firstPeople);

class Worker extends People {
  constructor(name, surName, rate, day) {
    super(name, surName);
    this.rate = rate;
    this.day = day;
  }

  getSallary() {
    return `${this.getFullName()} получил ${this.rate * this.day}`;
  }
}

const firstWorker = new Worker("Alex", "Petrov", 500, 20);

const secondWorker = new Worker("Tony", "Ivanov", 700, 25);

console.log(firstWorker.getSallary());

console.log(secondWorker.getSallary());
console.log(secondWorker);
