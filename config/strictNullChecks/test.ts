// Type 'null' is not assignable to type 'number'.
const num: number = null;

declare const loggedInUsername: string;
 
const users = [
  { name: "Oby", age: 12 },
  { name: "Heera", age: 32 },
];

const loggedInUser = users.find((u) => u.name === loggedInUsername);
console.log(loggedInUser.age);
// 'loggedInUser' is possibly 'undefined'.