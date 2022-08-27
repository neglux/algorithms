/*
    Implement bubbleSort algorithm and optimize it.
*/

function bubbleSort(arr) {
  const swap = (array, index) => {
    let temp = array[index];
    array[index] = array[index + 1];
    array[index + 1] = temp;
  };

  for (let i = 0; i < arr.length; i++) {
    let noSwaps = true;
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j);
        noSwaps = false;
      }
    }
    if (noSwaps) return arr;
  }
  return arr;
}

console.log(bubbleSort([1, 8, 3, 4, 5]));
