function carry(fn, length = fn.length) {
  return function carry(...args) {
    if (length > args.length) {
      return (...otherArgs) => carry(...args, ...otherArgs);
    }
    return fn.apply(this, args);
  };
}

const fn = (a, b, c) => a + b + c;

const calc = carry(fn);

const b = calc(20)(2, 5);
b;
// const c = calc(20)(2, 5)(5, 3, 4); c
