/*
    Write a function called stringSearch, which accepts a longer string and a smaller string,
    and returns the count of the number of times the smaller string appears in the longer string 


    ```
        stringSearch("wowomgzomg","omg") --> 2
        stringSearch("lorie loled","lol") --> 1
    ```
*/

function stringSearch(longStr, smallStr) {
  let count = 0;
  for (let i = 0; i < longStr.length; i++) {
    let j = 0;
    while (j < smallStr.length) {
      if (longStr[i + j] !== smallStr[j]) break;
      j++;
    }
    if (j === smallStr.length) count++;
  }
  return count;
}

console.log(stringSearch("lorie loled", "lol"));
console.log(stringSearch("wowomgzomg", "omg"));
