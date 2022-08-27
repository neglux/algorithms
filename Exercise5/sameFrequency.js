/*
  Write a function called sameFrequency. 
  
  Given two positive integers, find out if the two numbers have the same frequency of digits.

  ```
      sameFrequency(182,281) --> true
      sameFrequency(34,14) --> false
      sameFrequency(3589578, 5879385) --> true
      sameFrequency(22,222) --> false
  ```
*/

function sameFrequency(num1, num2) {
  num1 = String(num1).split("");
  num2 = String(num2).split("");
  if (num1.length !== num2.length) return false;

  const fCounter1 = {};
  num1.forEach((digit) => {
    fCounter1[digit] = (fCounter1[digit] || 0) + 1;
  });
  const fCounter2 = {};
  num2.forEach((digit) => {
    fCounter2[digit] = (fCounter2[digit] || 0) + 1;
  });
  for (let key in fCounter1) {
    if (!fCounter2[key]) return false;
    if (fCounter2[key] !== fCounter1[key]) return false;
  }

  return true;
}

console.log(sameFrequency(1321, 2311));
