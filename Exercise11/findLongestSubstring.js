/*
Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.
 
    ```
        findLongestSubstring('') --> 0
        findLongestSubstring('rithmschool') --> 7
        findLongestSubstring('thisisawesome') --> 6
        findLongestSubstring('thecatinthehat') --> 7
        findLongestSubstring('bbbbbb') --> 1
        findLongestSubstring('longestsubstring') --> 8
        findLongestSubstring('thisishowwedoit') --> 6
    ```
*/
function findLongestSubstring(str) {
  let cursor = 0;
  let traveled = {};
  let longestCount = 0;
  while (cursor < str.length) {
    let current = str[cursor];

    if (traveled[current]) {
      longestCount = Math.max(longestCount, Object.keys(traveled).length);
      cursor = traveled[current];
      traveled = {};
    } else traveled[current] = cursor;
    cursor++;
  }
  return Math.max(longestCount, Object.keys(traveled).length);
}
