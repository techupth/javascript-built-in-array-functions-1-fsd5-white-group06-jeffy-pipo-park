let words = ["hello", "world"];

function getWordLengths(words) {
  let sum = words.map((words) => {
    return words.length;
  });

  return sum;
}

const result = getWordLengths(words);

console.log(result); // Output: [5, 5]
