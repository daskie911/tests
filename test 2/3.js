function enhanceWords(words) {
  return words.map((word) => {
    if (word.length < 4) {
      return word.toLowerCase();
    }
    if (word.length % 2 === 0) {
      return `${word}*`;
    } else {
      return word.toUpperCase();
    }
  });
}

console.log(
  enhanceWords(["table", "chair", "Lamp", "desk", "bookshelf", "Couch"])
);
console.log(enhanceWords(["cat", "dog", "elephant", "Lion", "tiger"]));
