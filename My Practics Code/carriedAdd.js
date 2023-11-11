function carry(func, length = func.length) {
  return function carried(...first) {
    return length === first.length
      ? func(...first)
      : (...second) => carried(...first, ...second);
  };
}
function add(a, b, c, d) {
  return a + b + c + d;
}
const carriedAdd = carry(add);

const rez2 = carriedAdd(1, 2)(3, 4);
rez2;
const rez3 = carriedAdd(1, 20)(3)(250);
rez2;
