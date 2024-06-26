import { isEmpty, isBoolean } from "class-validator";

console.log(isEmpty({})); // false
console.log(isEmpty([])); // false
console.log(isEmpty("")); // true
console.log(isEmpty(null)); // true
console.log(isEmpty(undefined)); // true
console.log(isEmpty(isBoolean("false"))); // false
