let words = ["apple", "cat", "dog", "elephant"];

function get5CharWords(words) {
  let test = words.filter((countLetter) =>
    countLetter.length >= 5 ? true : false
  );
  console.log(test);
  return test;
}

const result = get5CharWords(words);

console.log(result); // Output: ["apple", "elephant"]
