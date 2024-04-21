import { add, sub, getAllCountries, compareTwoObjects } from "./utilities.js";

console.log("Line 1");
console.log(add(8, 9));
console.log(sub(8, 9));
// getAllCountries();

const obj1 = {
  name: "sam",
  age: 40,
};

const obj2 = {
  age: 40,
  name: "sam",
};

console.log(compareTwoObjects(obj1, obj2));
