let words = ["hello", "world"];

function getWordLengths(words) {
  let test = words.map((count) => count.length);
  console.log(test);
  return words.map((count) => count.length);
}

const result = getWordLengths(words);

console.log(result); // Output: [5, 5]
