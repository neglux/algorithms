/*
    Implement quickSort
*/

function pivot(arr, startIx = 0, endIx = arr.length + 1) {
  const swap = (array, index1, index2) => {
    let temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
  };
  let pivotIx = startIx;
  let curPivot = arr[pivotIx];
  for (let i = startIx + 1; i <= endIx; i++) {
    if (curPivot > arr[i]) {
      pivotIx++;
      swap(arr, i, pivotIx);
    }
  }
  swap(arr, startIx, pivotIx);
  return pivotIx;
}

function quickSort(arr, start = 0, end = arr.length - 1) {
  if (start < end) {
    let pivotIx = pivot(arr, start, end);
    quickSort(arr, start, pivotIx - 1);
    quickSort(arr, pivotIx + 1, end);
  }

  return arr;
}

// console.log(
//   quickSort([
//     10, 8, 20, 9, 14, 12, 11, 15, 3, 17, 19, 7, 5, 2, 1, 6, 16, 18, 13, 4,
//   ])
// );
// console.log(quickSort([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]));
