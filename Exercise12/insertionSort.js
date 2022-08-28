/*
    Implement insertionSort
*/

function insertionSort(arr) {
  const swap = (array, index1, index2) => {
    let temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
  };
  for (let i = 1; i < arr.length; i++) {
    let cur = arr[i];
    for (let j = i - 1; j >= 0; j--) {
      if (cur < arr[j]) swap(arr, j, j + 1);
    }
  }
  return arr;
}
