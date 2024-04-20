// long version
function isDivisibleBy(n) {
  if (n % 2 === 0 && n % 3 === 0) {
    return "fizbaz";
  }
  if (n % 2 === 0) {
    return "fiz";
  }
  if (n % 3 === 0) {
    return "baz";
  } else {
    return "";
  }
}

// short version
function isDivisibleByShort(n) {
  let result = "";
  if (n % 2 === 0) result += "fiz";
  if (n % 3 === 0) result += "baz";
  return result;
}

console.log(isDivisibleBy(0));
console.log(isDivisibleBy(8));
console.log(isDivisibleBy(9));
console.log(isDivisibleBy(120));
console.log(isDivisibleBy(7));

console.log(isDivisibleByShort(0));
console.log(isDivisibleByShort(8));
console.log(isDivisibleByShort(9));
console.log(isDivisibleByShort(120));
console.log(isDivisibleByShort(7));
