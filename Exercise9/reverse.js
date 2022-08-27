/*
    Write a recursive function called reverse which accepts a string and returns a new string in reverse.

    ```
         reverse('awesome') -->  'emosewa'
         reverse('rithmschool') -->  'loohcsmhtir'
    ```
    
*/

function reverse(str) {
  if (str.length === 0) return "";
  return reverse(str.substring(1)) + str[0];
}

console.log(reverse("rithmschool"));
