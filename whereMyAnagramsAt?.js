/*
WHERE MY ANAGRAMS AT?

What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:

'abba' & 'baab' == true

'abba' & 'bbaa' == true

'abba' & 'abbba' == false

'abba' & 'abca' == false

Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:

anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']

anagrams('laser', ['lazing', 'lazy',  'lacer']) => []

===============================================================================================================

word is a string
wordsArr is an array
*/

function anagrams(word, wordsArr) {
  let checkerArr = [];
  let wordSplit = [];
  let answerArr = [];

  wordSplit = word.split("").sort().join("");

  for (let i = 0; i < wordsArr.length; i++) {
    checkerArr = wordsArr[i].split("").sort().join("");

    if (checkerArr === wordSplit) {
      answerArr.push(wordsArr[i]);
    }
  }

  return answerArr;
}

console.log(anagrams("abba", ["aabb", "abcd", "bbaa", "dadx"])); //-> ['aabb', 'bbaa']
console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer'])); // -> ['carer', 'racer']

// function anagrams(word, wordsArr) {
//   let checkerArr = [];
//   let wordSplit = [];
//   let answerArr = [];

//   wordSplit = word.split("").sort().join("");
//   console.log(`wordSplit: ${wordSplit}`);

//   for (let i = 0; i < wordsArr.length; i++) {
//     checkerArr = wordsArr[i].split("").sort().join("");
//     console.log(`index: ${i} checkerArr: ${checkerArr}`);

//     if (checkerArr === wordSplit) {
//       answerArr.push(wordsArr[i]);
//       console.log(`index: ${i} answerArr: ${answerArr}`);
//     }
//   }

//   return answerArr;
// }
