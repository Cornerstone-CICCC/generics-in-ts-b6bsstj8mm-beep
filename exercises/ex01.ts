const concatSum = <T>(value1: T, value2: T): string | number | void => {
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

concatSum("Hello" as string | number, 10);

concatSum(true, false);
