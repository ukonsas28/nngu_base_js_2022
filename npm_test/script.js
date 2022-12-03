export const sayHello = () => {
  console.log("Hello world! From module script");
};

export const user = {
  name: "Alex",
  age: 26,
};

user.age = "232";
user.name = [];
console.log(user);
