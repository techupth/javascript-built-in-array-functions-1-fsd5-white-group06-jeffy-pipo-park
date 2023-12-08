let words = ["apple", "cat", "dog", "elephant"];

function get5CharWords(words) {
  let sum = words.filter((words) => {
    return words.length >= 5;
  });

  return sum;
}

const result = get5CharWords(words);

console.log(result); // Output: ["apple", "elephant"]
