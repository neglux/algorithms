/*
    Write a recursive function called flatten which accepts an array of arrays and 
    returns a new array with all values flattened.

    ```
        flatten([1, 2, 3, [4, 5] ]) --> [1, 2, 3, 4, 5]
        flatten([1, [2, [3, 4], [[5]]]]) --> [1, 2, 3, 4, 5]
        flatten([[1],[2],[3]]) --> [1,2,3]
        flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) --> [1,2,3]
    ```
*/

function flatten(arr) {
  let newArr = [];
  for (const element of arr) {
    if (Array.isArray(element)) newArr = [...newArr, ...flatten(element)];
    else newArr.push(element);
  }

  return newArr;
}

console.log(flatten([1, [2, [3, 4], [[5]]]]));
