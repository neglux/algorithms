/*
    Implement mergeSort
*/

function mergeSort(arr) {
  const merge = (array1, array2) => {
    let finalArr = [];
    let i = 0,
      j = 0;
    while (i < array1.length && j < array2.length) {
      let element1 = array1[i],
        element2 = array2[j];

      if (element1 < element2) {
        finalArr.push(element1);
        i++;
      } else {
        finalArr.push(element2);
        j++;
      }
    }
    if (i === array1.length) finalArr = [...finalArr, ...array2.slice(j)];
    if (j === array2.length) finalArr = [...finalArr, ...array1.slice(i)];

    return finalArr;
  };

  if (arr.length === 1) return arr;
  const mid = Math.floor(arr.length / 2);

  let leftArr = mergeSort(arr.slice(0, mid));
  let rightArr = mergeSort(arr.slice(mid));

  return merge(leftArr, rightArr);
}
console.log(mergeSort([2, 7, 3, 1, 8, 12, 34, 72, 1, 52, 5]));
