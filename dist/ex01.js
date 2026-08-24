"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const concatSum = (value1, value2) => {
    if (typeof value1 !== typeof value2) {
        console.log("Error: Both values must be the same type.");
        return;
    }
    if (typeof value1 === "string" && typeof value2 === "string") {
        return value1.concat(value2);
    }
    if (typeof value1 === "number" && typeof value2 === "number") {
        return value1 + value2;
    }
    console.log("Error: Values must be strings or numbers.");
};
// Tests
console.log(concatSum("Hello ", "World"));
console.log(concatSum(10, 20));
concatSum("Hello", 10);
concatSum(true, false);
//# sourceMappingURL=ex01.js.map