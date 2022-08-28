/*
    Implement radixSort
 */

function radixSort(arr) {
  const getDigit = (num, place) => {
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
  };

  const digitCount = (num) => {
    count = 0;
    while (num) {
      num = Math.floor(num / 10);
      count++;
    }
    return count;
  };

  const mostDigits = (arr) => {
    let max = 0;
    for (const number of arr) {
      max = Math.max(max, digitCount(number));
    }
    return max;
  };
  let largestDigit = mostDigits(arr);
  for (let i = 0; i < largestDigit; i++) {
    const buckets = [[], [], [], [], [], [], [], [], [], []];
    for (const number of arr) {
      let digit = getDigit(number, i);
      buckets[digit].push(number);
    }
    arr = [].concat(...buckets);
  }
  return arr;
}

console.log(
  radixSort([
    9631, 1628, 10, 8704, 4718, 4393, 4650, 466, 6897, 7393, 7657, 3696, 6900,
    1902, 9851,
  ])
);
