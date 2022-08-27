/*
    Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. 
    
    In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

  ```
    isSubsequence('hello', 'hello world'); --> true
    isSubsequence('sing', 'sting'); --> true
    isSubsequence('abc', 'abracadabra'); --> true
    isSubsequence('abc', 'acb'); --> false (order matters)
  ```
*/

function isSubsequence(str1, str2) {
  let left = 0,
    right = 0;

  while (right < str2.length) {
    if (str1[left] === str2[right]) {
      if (left === str1.length - 1) return true;
      left++;
    }
    right++;
  }
  return false;
}

console.log(isSubsequence("sing", "sting"));
