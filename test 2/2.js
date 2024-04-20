function reverseLetters(arr) {
  let newArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  return arr.concat(newArr);
}

// переделать с реверсом

function reverseLetters(arr) {
  let newArr = [...arr];
  let reversedArr = [...arr];
  reversedArr.reverse();
  console.log(newArr);
  return newArr.concat(reversedArr);
}

console.log(reverseLetters(["t", "q", "v", "r", "h"]));
console.log(reverseLetters(["a", "b", "c"]));
