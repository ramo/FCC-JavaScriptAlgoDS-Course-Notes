// method-1
function spinalCase(str) {
  return str
    .split(/[^a-zA-Z]|(?=[A-Z])/g)
    .join('-')
    .toLowerCase();
}

// method-2
function spinalCase(str) {
  const words = [];
  let word = [];
  const lowerCase = (c) => c >= 'a' && c <= 'z';
  const upperCase = (c) => c >= 'A' && c <= 'Z';

  for (const letter of str) {
    if (lowerCase(letter)) {
      // Just push the lowercase letter to current word array
      word.push(letter);
    } else if (upperCase(letter)) {
      // Uppercase letter is a special case, where we need to
      // ensure that this letter is pushed to new word array
      // and any old word should be added to words first.
      if (word.length > 0) {
        words.push(word.join(''));
        word = [];
      }
      word.push(letter);
    } else {
      // ignore the non alpha character; but add the current word to words
      words.push(word.join(''));
      word = []; // create new word array
    }
  }
  // handle edge case for the last word
  if (word.length > 0) words.push(word.join(''));
  return words.join('-').toLowerCase();
}
