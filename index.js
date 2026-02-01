// Task-1
// Take four parameters. Multiply the four numbers and then return the result

// function multiply(a, b, c, d) {
//   return a * b * c * d;
// }

// const result = multiply(4, 5, 6, 7);
// console.log(result);

// Task-2
// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

function number(num) {
  if (num % 2 !== 0) {
    return num * 2;
  } else {
    return num / 2;
  }
}

const result = number(10);
console.log(result);
