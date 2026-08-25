"use strict";
// Create a generic function named `safeAccess` that safely accesses nested
// properties of an object using an array of keys.
// Demonstrate the function with different object structures and key sequences,
// including arrays and objects.
Object.defineProperty(exports, "__esModule", { value: true });
const safeAccess = (object, keys) => {
    let current = object;
    for (const key of keys) {
        if (current !== null &&
            typeof current === "object" &&
            key in current) {
            current = current[key];
        }
        else {
            return undefined;
        }
    }
    return current;
};
// Example 1: Nested object
const user = {
    name: "Sarai",
    address: {
        city: "Vancouver",
        country: "Canada",
    },
};
console.log(safeAccess(user, ["address", "city"]));
// Example 2: Nested object with array
const student = {
    name: "Sarai",
    courses: [
        {
            name: "TypeScript",
            grade: 95,
        },
        {
            name: "JavaScript",
            grade: 90,
        },
    ],
};
console.log(safeAccess(student, ["courses", 0, "name"]));
console.log(safeAccess(student, ["courses", 1, "grade"]));
// Example 3: Property that does not exist
console.log(safeAccess(user, ["address", "street"]));
//# sourceMappingURL=ex11.js.map