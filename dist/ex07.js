"use strict";
// Implement a generic function called `filterByType` that takes an array of type `T[]` and a type `U`.
// It should return a new array containing only elements of type `U`.
// Test the function with arrays containing various types and different target types `U`.
Object.defineProperty(exports, "__esModule", { value: true });
const filterByType = (array, type) => {
    return array.filter((item) => typeof item === type);
};
// Mixed array
const mixedArray = [
    "hello",
    10,
    true,
    "world",
    20,
    false,
];
// Filter strings
console.log(filterByType(mixedArray, "string"));
// Filter numbers
console.log(filterByType(mixedArray, "number"));
// Filter booleans
console.log(filterByType(mixedArray, "boolean"));
//# sourceMappingURL=ex07.js.map