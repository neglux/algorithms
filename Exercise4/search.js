/*
    Given a sorted array of integers, write a function called search, that accepts a value and
    returns the index where the value passed to the function is located. 
    
    If the value is not found, return -1

    ```
        search([1,2,3,4,5,6], 4) --> 3
        search([1,2,3,4,5,6], 6) --> 5
        search([1,2,3,4,5,6], 11) --> -1
    ```
*/

function search(arr, x) {
  let min = 0,
    max = arr.length - 1;

  while (min <= max) {
    let middle = Math.floor((max + min) / 2);
    if (x < arr[middle]) max = middle + 1;
    else if (x > arr[middle]) min = middle + 1;
    else return middle;
  }

  return -1;
}

console.log(
  search([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18], 18)
);
