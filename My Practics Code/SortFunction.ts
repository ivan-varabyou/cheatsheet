function sort<T>(array: T[], compare: (a: T, b: T) => number): T[] {
  let isSorted = false;
  let sorted = [...array];
  while (!isSorted) {
    isSorted = true;
    for (let i = 0; i < sorted.length - 1; i++) {
      const current = sorted[i];
      const next = sorted[i + 1];
      const result = compare(current, next);
      if (result > 0) {
        sorted[i] = next;
        sorted[i + 1] = current;
        isSorted = false;
      }
    }
  }
  return sorted;
}

const arrays = [4, 5, 1, 2, 43, 0, 3, 3, 6];
const test1 = arrays.sort((a, b) => b - a);
test1;
const test2 = sort(arrays, (a, b) => a - b);
test2;
