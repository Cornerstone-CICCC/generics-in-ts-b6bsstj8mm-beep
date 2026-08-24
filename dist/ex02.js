"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function identity(value) {
    return value;
}
// Test with a number
const numberResult = identity(25);
console.log("Number:", numberResult);
// Test with a string
const stringResult = identity("Hello TypeScript");
console.log("String:", stringResult);
// Test with a custom object
const personResult = identity({
    name: "Sarai",
    role: "Student",
});
console.log("Object:", personResult);
//# sourceMappingURL=ex02.js.map