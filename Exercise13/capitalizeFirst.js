/*
    Write a recursive function called capitalizeFirst. 
    
    Given an array of strings, capitalize the first letter of each string in the array.

    ```
    capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']
    ```
*/

function capitalizeFirst(arr) {
  const capitalize = (str) => {
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
      newStr += i === 0 ? str[i].toUpperCase() : str[i];
    }
    return newStr;
  };
  if (arr.length === 0) return "";
  let newArr = [];
  newArr = [capitalize(arr[0]), ...capitalizeFirst(arr.slice(1))];

  return newArr;
}

console.log(capitalizeFirst(["car", "taco", "banana"]));
