function filterWithReducer<T, U>(
  array: T[],
  cb: (item: T, index: number, originalArray: T[])
) {
    return array.reduce<T[]>((acc, cur, index, originalArray) => {
        if (cb(cur, index, array)) {
            acc.push(cur);
        }
        return acc
    }, [])
}

const array = [1, 2, 3, 4, 5, 6]

const test1 = array.filter((item, index) => item  > 1); test1
const test2 = filterWithReducer(array, (item, index) => item  === 6); test2