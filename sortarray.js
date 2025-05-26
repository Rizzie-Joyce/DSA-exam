let numbers = [24, 65, 21, 5, 9, 32, 42, 80, 57];
let names = ["Zenvo", "Erica", "Jordie", "Alicia", "Redon"];

let merged = numbers.concat(names);
console.log("Merged array:", merged);

let sortedNums = numbers.sort(function(a, b) {
  return b - a;
});
console.log("Sorted numbers (reverse):", sortedNums);

let sortedNames = names.sort();
console.log("Sorted names (A-Z):", sortedNames);