function map(array, cb) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(cb(array[i], i, array));
  }
  return newArray;
}

Array.prototype.map2 = function (cb) {
  let self = this;
  self;
  const newArray = [];
  for (let i = 0; i < self.length; i++) {
    newArray.push(cb(self[i], i, self));
  }
  return newArray;
};

const user = {
  name: "John",
  age: 30,
};

const array = ["aa", "cc", "aa"];
const test1 = array.map((value, index, array) => {
  let self = this;
  return this;
});
test1;
const test2 = map(["aa", "cc", "aa"], (value, index, array) => value);
test2;
const test3 = ["aa", "cc", "aa"].map2((value, index, array) => value);
test3;
