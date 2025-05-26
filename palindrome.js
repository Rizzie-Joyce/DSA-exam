let word1 = prompt("Enter first word:");
let word2 = prompt("Enter second word:");

function reverse(str) {
  return str.split('').reverse().join('');
}

console.log("Original:", word1);
console.log("Reversed:", reverse(word1));
console.log("Is palindrome?", word1 === reverse(word1));

console.log("Original:", word2);
console.log("Reversed:", reverse(word2));
console.log("Is palindrome?", word2 === reverse(word2));