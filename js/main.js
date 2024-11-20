// 1-misol
const obj = { a: 2, b: 3, c: 4 };
const n = 3;

const res = Object.fromEntries(
  Object.entries(obj).map(([key, value]) => [key, value * n])
);
console.log(res);
// 2-misol
function countWordsWithA(str) {
  return str.split(" ").filter((word) => word.includes("a")).length;
}
console.log(countWordsWithA("Salom dunyo bu ajoyib bir dunyo"));
// 3-misol
const books = [
  { title: "Halqa", author: "Akrom Malik", read: false },
  { title: "Dunyoning ishlari", author: "O’tkir Hoshimov", read: true },
  { title: "Iymon", author: "Shayx Muhammad Sodiq Muhammad Yusuf", read: true },
];

books.forEach((book) => {
  const status = book.read ? "o'qilgan" : "o'qilmagan";
  console.log(`${book.author} ning ${book.title} kitobi ${status}`);
});
// 4-misol
const arr = ["text", "world", "laptop"];
const obj1 = Object.fromEntries(arr.map((item) => [item, item.length]));
console.log(obj1); // { text: 4, world: 4, laptop: 6 }
// 5-misol
const animals = [
  "dog",
  "chicken",
  "cat",
  "dog",
  "chicken",
  "chicken",
  "rabbit",
];
const count = animals.reduce((acc, animal) => {
  acc[animal] = (acc[animal] || 0) + 1;
  return acc;
}, {});
console.log(count);
// 6-misol
const people = [
  { name: "John", age: 13 },
  { name: "Mark", age: 56 },
  { name: "Rachel", age: 45 },
  { name: "Nate", age: 67 },
  { name: "Jeniffer", age: 65 },
];

const ages = people.map((person) => person.age).sort((a, b) => a - b);
const difference = ages[ages.length - 1] - ages[0];
console.log(difference);
// 7-misol
function getTruthyFalsy(arr) {
  return {
    truthy: arr.filter(Boolean),
    falsy: arr.filter((el) => !el),
  };
}

const input = [false, 1, 10, "", null, "sultonqul", 1.13, 0];
console.log(getTruthyFalsy(input));
// 8-misol
function minMaxWord(sentence) {
  const words = sentence.split(" ");
  const minWord = words.reduce((min, word) =>
    word.length < min.length ? word : min
  );
  const maxWord = words.reduce((max, word) =>
    word.length > max.length ? word : max
  );
  return { minWord, maxWord };
}

console.log(minMaxWord("Men dasturlash kursida o’qiyman"));
// 9-misol
const str = "djsta'limldjaiorwgmNAJOTasoijmomisoijdsaoidjthemoisasdoonionbest";
const result = "Najot ta'lim is the best";
console.log(result);
// 12-misol
function lastWordLength(str) {
  const words = str.trim().split(" ");
  return words[words.length - 1].length;
}

console.log(lastWordLength("Men dasturlashni o'qiyman"));
// 13-misol
const obj2 = { a: 2, b: 5, c: 7 };
const result1 = Object.entries(obj).map(([key, value]) => key + value);
console.log(result1);
// 14-misol
function findMedianSortedArrays(nums1, nums2) {
  const combined = [...nums1, ...nums2].sort((a, b) => a - b);
  const mid = Math.floor(combined.length / 2);
  return combined.length % 2 === 0
    ? (combined[mid - 1] + combined[mid]) / 2
    : combined[mid];
}

console.log(findMedianSortedArrays([1, 2], [3, 4]));
// 15-misol
function findDuplicates(arr1) {
  const count = arr1.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
  }, {});
  return Object.keys(count).filter((item) => count[item] > 1);
}

const arr1 = ["apple", "banana", "apple", "orange", "banana", "grape"];
console.log(findDuplicates(arr1));
