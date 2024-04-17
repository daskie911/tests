function CalculateParity(a, b) {
  if (a % 2 == 0 && b % 2 == 0) {
    return "Even";
  } else if (a % 2 != 0 && b % 2 != 0) {
    return "Odd";
  } else {
    return "Even";
  }
}

console.log(CalculateParity(2, 4))
