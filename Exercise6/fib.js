function fib(num) {
  function helper(first, last) {
    if (num === 1) return first;
    num--;
    return helper(last, first + last);
  }

  return helper(1, 1);
}

console.log(fib(4));
