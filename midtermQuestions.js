/*
Write a function called sumOfOdds that takes in 2 numbers as parameters and sums the odd numbers between them.
This function is inclusive so please include your two parameters in your calculation.
After summing the numbers, return the sum.
You can assume that the 2nd number passed in will always be greater than the first and that the two numbers will not be the same
Note: This problem should account for negative number input
*/

//1.
/*
2 - parameters
both numbers

if statement to check the number is odd

*/





function sumOfOdds(num1, num2) {

    sum = 0

    for (let i = num1 - 1; i < num2 + 1; i++) {
        if (i % 2 !== 0) {
            sum += i
            console.log(sum)
        }

    }
    return sum
}

console.log(sumOfOdds(-10, -5))
////=====================================================================

//2.

/*
Write a function arraySubtract that takes in 2 arrays of numbers and subtracts the item in each index at array 1 with its respective item in each index at array 2.
The result of each calculation should be placed in a new array and that array should be returned when the calculations are complete.
For example arraySubtract([7,9],[2,6]) should return [5,3]
You can assume the arrays that are being input are of the same length
*/


/*
function
2 parameters
2 arrays -  both numbers

return the result in a new array
resultArray =[]
*/

function arraySubtract(arr1, arr2){
    let resultArray = []
    for(let i = 0; i < arr2.length; i++){
        resultArray.push(arr1[i] - arr2[i])
        console.log(resultArray)
    }
    
    return resultArray
}

//console.log(arraySubtract([7,9],[2,6]))

////================================================================

// //3.

/*
Write a function that takes in 3 parameters in this order: 1 array, 1 string, and then another string.
Add the first string to the beginning of the array
Add the second string to the end of the array
Return the modified array
*/


/*
function
3 parameters

array,  string, string

add first tring to the beginning of the array using .unshift

*/

function surroundArray(arr, str1, str2){
    moddedArray = [];
    
    moddedArray.unshift(str1); //add str1 to the beggining of moddedArray
    
    for(let i = 0; i < arr.length; i++){
        moddedArray.push(arr[i]);
    
    }
    moddedArray.push(str2);
    
    return moddedArray;
}

console.log(surroundArray(['cat'], 'dog', 'bird'));
console.log(surroundArray(['fox', 'mountain', 'egg'], 'bear', 'tent'));
//       expected result: ['bear', 'fox', 'mountain', 'egg', 'tent']);

////===================================================================

//4.

/*
Write a function longestString that takes in an array of strings as a parameter and returns the longest string in the array.
If there is nothing in the array, return an empty string ('')
You can assume that no two strings will have the same length in the array
*/


/*
function
1 parameter
-array of strings

let longest = arr[0] // will use to compare later
for loop 
if statement to check 
    length of str in arr is bigger than longest variable
    if longer, add item to longest

    return longest
*/

function longestString(arr){
    let longest = arr[0];
    
    if(arr.length === 0){
        return ''
    }

    for(let i = 0; i < arr.length; i++){
        if(arr[i].length > longest.length){
            longest = arr[i]
        }
    }
    return longest
}

console.log(longestString(['flying', 'fire', 'steel', 'psychic']));
console.log(longestString([]));
// let emptyStr = ''
// let arr3 = []

// if(arr3 === emptyStr){
//     console.log('1')
// }

// //console.log([])

////=====================================================================

//5.

/*
Write a function sToR that replaces every 's' character in the string with an 'r' AND every 'r' character in the string with an 's'
If the letter in the original string is uppercase the letter in the output string should be as well
Do NOT use replaceAll or similar string methods.  If you are unsure what that means, ask before you use a string method!  (toUpperCase() and toLowerCase() should be all you need if anything)
*/


/*
function
1 parameter
-str

for loop to go thru the string
if statement
- if string[i] is equal to 's' then change it to 'r', if equal to 'r' then change to 's', 
do the same thing for capital letters



*/

function sToR(str){
    let newStr = '';
    
    for(let i = 0; i < str.length; i++){
        if(str[i] === 's'){
            newStr += 'r'
        } else if(str[i] === 'r'){
            newStr += 's'
        } else if(str[i] === 'S'){
            newStr += 'R'
        } else if(str[i] === 'R'){
            newStr += 'S'
        } else {
            newStr += str[i]
        }
    }
    return newStr
}

//console.log(sToR('Everything In Its Right Place'))

////====================================================================

//6. 

/*
Write a function divisibleBy4And7 that takes in a number and returns true if it is divisble by both 4 and 7.
If it is not, return false.
*/

function divisibleBy4And7(num){
    if(num % 4 === 0 && num % 7 === 0){
        return true
    } else {
        return false
    }
}

//console.log(divisibleBy4And7(140))

//==================================================================
//7. 

/*
Write a function exclamationAndQuestion that takes in a string
return true if the string contains both an exclamation point (!) AND a question mark (?)
Return false if otherwise
*/


function exclamationAndQuestion(str){
    ctrEx = 0
    ctrQ = 0
    for(let i = 0; i < str.length; i++){
        
        if(str[i] === '!'){
            ctrEx += 1 //counts when '!' is found
        } 
        if(str[i] === '?'){
            ctrQ += 1 //counts when '?' is found
        }
        
    }
    if(ctrEx > 0 && ctrQ > 0){ //if each counter has more than 0 then return true
        return true
    } else {
        return false
    }
    
}

console.log(exclamationAndQuestion('Hey What is up?'))

////====================================================================
//8.

/*
Write a function called countAB that takes in a single string and returns an array of length two.  The first item in the array should be the count of every A character in the array.  The 2nd item should be the count of every B character in the array.  
No need to add the count of A and B together.  Again, we want an array with the separate counts of each
Your function should account for both cases (upper and lower) of each letter.
*/


/*
function countAB(str){
let resultArr = []
let ctrA = 0
let ctrB = 0
for loop to check thru the string. 
    if state(if str[i] === 'a' || str[i] === 'A'){
    countA++
    }
    if state(if str[i] === 'b' || str[i] === 'B'){
    countB++
}


    returns array(length of 2)
}



*/

function countAB(str){

    let resultArr = []
    let ctrA = 0
    let ctrB = 0

    for(let i = 0; i < str.length; i++){
        if(str[i] === 'a' || str[i] === 'A'){
            ctrA++ //adds to the counter every time
            console.log(ctrA)
        }
        
    }
    resultArr.push(ctrA)
        
    for(let x = 0; x < str.length; x++){
        if(str[x] === 'b' || str[x] === 'B'){
            ctrB++
            console.log('b:' + ctrB )
        }
        
    }
    resultArr.push(ctrB)
    
    return resultArr

}

console.log(countAB('Basketball is my favorite sport.  I like the way they dribble up and down the court'))

//'Basketball is my favorite sport.  I like the way they dribble up and down the court'
// [5,4]