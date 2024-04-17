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

console.log(isDivisibleBy(0));
console.log(isDivisibleBy(8));
console.log(isDivisibleBy(9));
console.log(isDivisibleBy(120));
console.log(isDivisibleBy(7));