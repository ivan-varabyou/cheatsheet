function reduce(array, cb, init) {
  let acc = init;
  for (let i = 0; i < array.length; i++) {
    const curr = array[i];
    const index = i;
    acc = cb(acc, curr, index, array);
  }
  return acc;
}

Array.prototype.reduce2 = function (callback, acc) {
  for (let i = 0; i < this.length; i++) {
    acc = callback(acc, this[i], i, this);
  }
  return acc;
};

const arr = [1, 2, 3, 4, 5];
const test3 = arr.reduce2((acc, curr, index, array) => acc + curr, 0);
test3;
const test2 = arr.reduce((acc, curr, index, array) => acc + curr, 0);
test2;
const test = reduce(arr, (acc, curr, index, array) => acc + curr, 0);
test;
