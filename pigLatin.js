//Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
/* 
function
takes 1 parameter

parameter - string

use .split(" ") to turn the string into an array - strArray

for loop to check the strArray one item at a time


pigIt('Pig latin is cool') // igPay atinlay siay oolcay

*/

let string1 = 'Pig latin is cool ?'

function pigIt(str) {


  let strArray = str.split(" ") //splits the sting into an array


  let eachWordArr = []
  let arrayToStr = ''
  let holdThisLetter = []
  let piggyStr = []


  for (let i = 0; i < strArray.length; i++) { //goes thru each word in the array

    eachWordArr = strArray[i] //eachWordArr becomes the item for that iteration
    eachWordArr = eachWordArr.split("") //split each letter and turn into an array
    holdThisLetter = eachWordArr.splice(0, 1) //splice off the first letter and save it in holdThisLetter
    eachWordArr.push(holdThisLetter[0]) //push holdThisLetter to the end of the arr
    eachWordArr.join('') //turn the array back to a string
    eachWordArr = eachWordArr.concat('ay') //appends 'ay' to the end of the array
    arrayToStr = eachWordArr.join('') //turns the array back into a string
    piggyStr.push(arrayToStr) //pushes the string into the final return variable
  }


  for (x = 0; x < piggyStr.length; x++) {


    if (piggyStr[x] === '!ay') {
      piggyStr[x] = '!'

    }
    if (piggyStr[x] === '?ay') {
      piggyStr[x] = '?'

    }
    if (piggyStr[x] === '.ay') {
      piggyStr[x] = '.'
    }

  }


  piggyStr = piggyStr.join(" ")
  return piggyStr

}

//console.log(string1)
console.log(pigIt(string1))



////================================================
//// Pig Latin //// Code only


function pigIt(str) {
  

  let strArray = str.split(" ")


  let eachWordArr = []
  let arrayToStr = ''
  let holdThisLetter = []
  let piggyStr = []


  for (let i = 0; i < strArray.length; i++) { 

    eachWordArr = strArray[i] 
    eachWordArr = eachWordArr.split("") 
    holdThisLetter = eachWordArr.splice(0, 1) 
    eachWordArr.push(holdThisLetter[0]) 
    eachWordArr.join('') 
    arrayToStr = eachWordArr.join('') 
    piggyStr.push(arrayToStr) 
  }

  
  for (x = 0; x < piggyStr.length; x++) {

    if (piggyStr[x] === '!ay') {
      piggyStr[x] = '!'

    }
    if(piggyStr[x] === '?ay'){
      piggyStr[x] = '?'
    
    }
    if(piggyStr[x] === '.ay'){
      piggyStr[x] = '.'
    }  
    
  }
 
  piggyStr = piggyStr.join(" ")
  return piggyStr

}

////===========================================================



// console.log()
//     strArray

// console.log()
//     strArray[0]

// eachWordArr = strArray[0]

// console.log(eachWordArr[eachWordArr.length-1])

// console.log(eachWordArr = eachWordArr.split(""))

// console.log()
//     holdThisLetter = eachWordArr.splice(0,1)
// console.log()
//     eachWordArr.push(holdThisLetter[0])
// console.log(eachWordArr)
// console.log(eachWordArr.join(''))
// console.log(eachWordArr = eachWordArr.concat('ay'))
// console.log(arrayToStr = eachWordArr.join(''))
//console.log(arrayToStr)


//months.splice(0,1)
//console.log(months)


////===================================================================
/*

const string1 = 'Pig latin is cool ?';
const string2 = 'Pig latin is cool!';
const string3 = 'Pig latin is cool';



function pigLatin(str) {
  const puncuations = ['!', '?', '.'];
  const array = str.split(' ');

  return array.map(word => { //adding a function as the parameter to .map
    const lastCharacter = word.substring(word.length-1); //if the last character in a word is any of these characters(punctuations)
    if (puncuations.includes(lastCharacter)) {

      if (word.length === 1) {
        return word;
      }

      return [
        word.substring(1, word.length - 1),
        word.substring(0,1),
        'ay',
        word.substring(word.length - 1)
      ].join('')

    } else {
      return word.substring(1) + word.substring(0,1) + 'ay';
    }
  }).join(' ');
}


const spacedPunctuation = pigLatin(string1);
const noSpacedPunctuation = pigLatin(string2);
const nPunctuation = pigLatin(string3);

console.log('spacedPunctuation', spacedPunctuation);
console.log('noSpacedPunctuation', noSpacedPunctuation);
console.log('nPunctuation', nPunctuation);

*/


////==============================================================

/*
const numbers = [1, 4, 5];

function squareSum(arr) {
    let result = 0

    let outputArr = arr.map(function (num) {
        return num ** 2
    })

    for (let i = 0; i < outputArr.length; i++) {

        result += outputArr[i]
    }
    return result
}

console.log(squareSum(numbers))
*/


