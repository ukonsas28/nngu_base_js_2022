// if (true) {
//   console.log("true");
// }
// if (false) {
//   console.log("false");
// }

// const userName = "Alex3";

// if (userName === "Ivan") {
//   console.log(`Привет ${userName}`);
// } else if (userName === "Alex") {
//   console.log(`Привет друг ${userName}`);
// } else if (userName === "Petr") {
//   console.log(`Hi ${userName}`);
// } else {
//   console.log("Привет Незнакомец");
// }

// if ("true") {
//   if (1) {
//     console.log("true");
//   } else {
//     console.log("false");
//   }
// } else {
//   console.log("false");
// }

// const userName = "Alex45";

// const result = userName === "Alex" ? "Hello Alex" : "Hello User";

// console.log(result);

// const a = 100;
// const b = 20;
// const c = 3;

// if (a < b) {
//   if (b < c) {
//     console.log("C самый большой");
//   } else {
//     console.log("B самый большой");
//   }
// } else {
//   if (a < c) {
//     console.log("C самый большой");
//   } else {
//     console.log("A самый большой");
//   }
// }

const userRole = "manager";

// switch (userRole) {
//   case "admin":
//     console.log("Это админ, и он любит чай");
//     break;

//   case "user":
//     console.log("Это юзер, и он любит колу");
//     break;

//   case "manager":
//     console.log("Это manager, и он любит кофе");
//     break;
// }

// let result3 = false || 0 || "" || "fffff" || 0;
// console.log(result3);

// const a = 100;
// const b = 20;
// const c = 3;

// if (a < b && b < c) {
//   console.log("C самый большой");
// } else if (a < b && b > c) {
//   console.log("B самый большой");
// } else if (a < c) {
//   console.log("C самый большой");
// } else {
//   console.log("A самый большой");
// }

const temp = -30;

if (temp <= -30) {
  console.log("оставайся дома");
} else if (temp > -30 && temp <= -10) {
  console.log("сегодня холодно");
} else if (temp > -10 && temp <= 5) {
  console.log("не холодно");
} else if (temp > 5 && temp <= 15) {
  console.log("тепло");
} else if (temp > 15 && temp <= 25) {
  console.log("очень тепло");
} else if (temp > 25 && temp < 35) {
  console.log("жарко");
} else {
  console.log("пекло");
}
