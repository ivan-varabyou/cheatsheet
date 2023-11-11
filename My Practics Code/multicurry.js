function longSum(a) {
  a;
  return function (b) {
    b;
    a;
    if (b) return longSum(a + b);
    return a;
  };
}

const sum = (a) => (b) => b ? sum(a + b) : a;

let rez1 = longSum(1)(1)();
rez1;
