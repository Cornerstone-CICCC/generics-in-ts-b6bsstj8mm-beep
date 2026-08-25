"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getFirstElement = (array) => {
    return array[0];
};
// Numbers
const numberArray = [10, 20, 30];
console.log(getFirstElement(numberArray));
// Strings
const stringArray = ["apple", "banana", "orange"];
console.log(getFirstElement(stringArray));
// Booleans
const booleanArray = [true, false, true];
console.log(getFirstElement(booleanArray));
// Empty array
const emptyArray = [];
console.log(getFirstElement(emptyArray));
//# sourceMappingURL=ex04.js.map