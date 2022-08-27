/* 
Given two strings, write a function to determine if the second string is an anagram
of the first.

An anagram is a word, phase or name formed by rearranging the letters of another, 
such as cinema, formed from iceman

    ```     
        validAnagram('aaz','zza') --> false
        validAnagram('anagram','nagaram') --> true
        validAnagram('','') --> true
        validAnagram('car','rac') --> true
    ```

*/

function validAnagram(word1, word2) {
  if (word1.length !== word2.length) return false;
  let fCounter1 = {},
    fCounter2 = {};
  for (let char of word1) {
    fCounter1[char] = (fCounter1[char] || 0) + 1;
  }
  for (let char of word2) {
    fCounter2[char] = (fCounter2[char] || 0) + 1;
  }
  for (let key in fCounter1) {
    if (!(key in fCounter2)) return false;
    if (fCounter2[key] !== fCounter1[key]) return false;
  }

  return true;
}

console.log(validAnagram("", ""));
