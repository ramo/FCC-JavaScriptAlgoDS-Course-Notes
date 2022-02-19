
// method-1
function sumAll(arr) {
  // sort the input array to ensure that start is smaller than end
  let [start, end] = arr.sort((a, b) => a - b);
  
  let sum = 0;
  for (let i = start; i <= end; i++) {
    sum += i;
  }
  return sum;
}

// method-2
function sumAll(arr) {
  // sort the input array to ensure that start is smaller than end
  let [start, end] = arr.sort((a, b) => a - b);
  /**
   * Say, we need to calculate sum between x and y (x < y)
   * Assume the series 1, 2, 3, ...x, .....y
   * Now, the sum between x and y (inclusive) could be written as
   * sum of (1, 2, 3, ... y) - sum of (1, 2, 3, ... x-1)
   */
  const sum = n => n * (n + 1) / 2;
  return sum(end) - sum(start - 1);
}