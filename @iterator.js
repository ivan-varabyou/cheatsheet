const myIterable = {};
myIterable[Symbol.iterator] = function* () {
  yield 1;
  yield 2;
  yield 3;
};
[...myIterable]; // [1, 2, 3]


Array.prototype[@@iterator]()
TypedArray.prototype[@@iterator]()
String.prototype[@@iterator]()
Map.prototype[@@iterator]()
Set.prototype[@@iterator]()
arguments[@@iterator]()
Segments.prototype[@@iterator]()


/// @@iterator  позволяет использовать for...of && loops && ...spred


new Map // => only iterble
new Set // => only iterble

new Map([[1, 2], [3, 2], [1, 2]]); // {1 => 2, 3 => 2}