const mapper = <A>(array: A[], fn: (v: A, index: number, array: A[]) => A) => {
  return array.map(fn);
};

const array = [1, 2, 3, 4];

const fn = (v) => v * 10;

const result = mapper(array, fn);
result;

const index = -1;
const newResult = array.splice(2, 4);
newResult;
