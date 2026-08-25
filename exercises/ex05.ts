

const duplicateElements = <T>(array: T[], n: number): T[] => {
  const result: T[] = [];

  array.forEach((element) => {
    for (let i = 0; i < n; i++) {
      result.push(element);
    }
  });

  return result;
};

// Numbers
console.log(duplicateElements([1, 2, 3], 2));

// Strings
console.log(duplicateElements(["apple", "banana"], 3));

// Booleans
console.log(duplicateElements([true, false], 2));