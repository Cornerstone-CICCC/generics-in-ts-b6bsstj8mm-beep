

const createPair = <A, B>(first: A, second: B): [A, B] => {
  return [first, second];
};

// String and number
console.log(createPair("Sarai", 25));

// Number and boolean
console.log(createPair(100, true));

// String and string
console.log(createPair("Hello", "World"));

// Boolean and number
console.log(createPair(false, 50));