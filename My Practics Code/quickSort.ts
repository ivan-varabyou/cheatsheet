function quickSort<T>(array: T[], compare: (a: T, b: T) => number): T[] {
  let sorted = [...array];
  function sortHelper(start: number, end: number) {
    // Base case: if the subarray has one or zero elements, it is already sorted
    if (start >= end) return;
    // Choose a pivot element from the subarray (here we use the last element)
    let pivot = sorted[end];
    // Initialize two pointers to track the partitioning
    let i = start; // i points to the first element that is greater than or equal to the pivot
    let j = start; // j points to the current element being scanned
    // Loop through the subarray and partition it around the pivot
    while (j < end) {
      // Get the current element and the result of the comparison function
      let current = sorted[j];
      let result = compare(current, pivot);
      // If the current element is less than the pivot, swap it with the element at i and increment i
      if (result < 0) {
        [sorted[i], sorted[j]] = [sorted[j], sorted[i]];
        i++;
      }
      // Increment j to scan the next element
      j++;
    }
    // Swap the pivot with the element at i
    [sorted[i], sorted[end]] = [sorted[end], sorted[i]];
    // Recursively sort the left and right subarrays
    sortHelper(start, i - 1);
    sortHelper(i + 1, end);
  }
  sortHelper(0, sorted.length - 1);
  return sorted;
}

// An example array of numbers
const numbers = [4, 5, 1, 2, 43, 432432, 0, 3, 3, 6];
// Test the quickSort function with a comparison function for numbers
const test = quickSort(numbers, (a, b) => a - b); // test
