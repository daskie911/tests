function enhanceWords(words) {
  const enhancedWords = [];
  for (let i = 0; i < words.length; i++) {
    let word = words[i];

    if (word.length > 4) {
      word = word.toUpperCase();
    }

    if (i % 2 === 0) {
      word += "*";
    }

    enhancedWords.push(word);
  }

  return enhancedWords;
}
console.log(
  enhanceWords(["table", "chair", "Lamp", "desk", "bookshelf", "Couch"])
);
console.log(enhanceWords(["cat", "dog", "elephant", "Lion", "tiger"]));
