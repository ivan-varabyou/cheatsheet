function mapWithReducer<T, U>(
  array: T[],
  cb: (item: T, index: number, originalArray: T[])
) {
    return array.reduce<T[]>((acc, curr, index) => {
        acc
    acc.push(cb(curr, index, array));
    return acc;
  }, []);
}

const array = [1, 2, 3, 4, 5, 6]

const test1 = array.map((item, index) => item + 1); test1
const test2 = mapWithReducer(array, (item, index, originalArray) => item + 1); test2