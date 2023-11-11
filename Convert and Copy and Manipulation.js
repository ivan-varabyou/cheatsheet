const array = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
// Array to Object
const obj = { ...array };

// Array key and value to object
const obj2 = Object.fromEntries([
  ["key", 1],
  ["key2", 3],
]);

// object to array
Object.keys(obj);
Object.values(obj);
Object.entries(object);

// Other
Array.from(arrayLike, mapFn, thisArg);
Array.from([1, 2, 3], (x) => x + x); // Array [2, 4, 6]
Array.from("name"); // ["n", "a", "m", "e"] /// [..."name"]
const mapper = new Map([
  ["a", 2],
  ["b", 4],
  ["b", 4],
  ["b", 4],
]); // [["a",2], ["b",4]]
Array.from(mapper); // [["a",2], ["b",4]]
Array.from(mapper.values()); // [2, 4]
Array.from(mapper.keys()); // [a, b]

// Copy
const newArray = [...array];
const object = { a: 1, b: 2, c: 3 };
const newObject = { ...object };
JSON.parse(JSON.stringify(object));
Object.defineProperty({}, Object.getOwnPropertyDescriptors(object)); // all copy
Object.create(
  {},
  { ...Object.getOwnPropertyDescriptors({ a: 1, b: 2, c: 3 }) }
);
Object.assign(
  {},
  { ...Object.getOwnPropertyDescriptors({ a: 1, b: 2, c: 3 }) }
);

// Unique
const uniq = [...new Set([1, 2, 3, 4, 5, 1, 2, 3, 4, 5])];
