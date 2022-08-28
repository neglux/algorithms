/*
    Write a recursive function called capitalizeWords. 
    
    Given an array of words, return a new array containing each word capitalized.

    capitalizeWords(['i', 'am', 'learning', 'recursion']) --> ['I', 'AM', 'LEARNING', 'RECURSION']
*/

function capitalizeWords(arr) {
  if (arr.length === 0) return "";
  let newArr = [];
  newArr = [arr[0].toUpperCase(), ...capitalizeWords(arr.slice(1))];
  return newArr;
}

console.log(capitalizeWords(["i", "am", "learning", "recursion"]));
