/*
    Implement selection sort
*/

function selectionSort(arr) {
  const swap = (array, index1, index2) => {
    let temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
  };
  for (let i = 0; i < arr.length; i++) {
    let smallest = { index: i, value: arr[i] };
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < smallest.value) smallest = { index: j, value: arr[j] };
    }
    if (i !== smallest.index) swap(arr, i, smallest.index);
  }
  return arr;
}

console.log(selectionSort([2, 4, 1, 8, 6, 3, 9, 0]));
