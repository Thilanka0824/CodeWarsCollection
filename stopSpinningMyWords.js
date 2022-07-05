/*
Stop gninnipS My sdroW!

Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 

spinWords( "This is a test") => returns "This is a test" 

spinWords( "This is another test" )=> returns "This is rehtona test"
*/



function spinWords(str){
    
    let stringArr = str.split(" ")

    let eachWordArray = []
    let eachLetterArray = []
    
    for(let i = 0; i < stringArr.length; i++){
        
        if(stringArr[i].length < 5){
            continue
        
        } else if (stringArr[i].length > 4){
            eachWordArray = stringArr[i]
            eachLetterArray = eachWordArray.split("")
            eachLetterArray = eachLetterArray.reverse()
            stringArr[i] = eachLetterArray.join('')
        
        }
            
    } return stringArr.join(' ')
}

console.log(spinWords('Hey fellow warroirs this is supercool'))




/*

const string1 = 'Hey fellow warroirs this is supercool'


let stringArr = string1.split(" ")

console.log(stringArr)
console.log(string1)
let eachWordArray = []
let eachLetterArray = []

for(let i = 0; i < stringArr.length; i++){
    
    
    if(stringArr[i].length < 5){
        //stringArr[i] = stringArr[i]
        continue
    
    } else if (stringArr[i].length > 4){
        eachWordArray = stringArr[i]
        eachLetterArray = eachWordArray.split("")
        //console.log(eachWordArray)
        //console.log(eachLetterArray)
        eachLetterArray = eachLetterArray.reverse()
        //console.log(eachLetterArray)
        
        //console.log(`joined together: ${eachLetterArray.join('')}`)
        stringArr[i] = eachLetterArray.join('')
    }
        
} console.log(`final: ${stringArr.join(' ')}`)

*/


////===========================================================================
///Luis' code

/*
function spinWords(string) {
    str = string.split(" ")
    let newStr = []
    // console.log(newStr)

    for (let i = 0; i < str.length; i++) {
        if (str[i].length >= 5) {
            str[i].split('').reverse().join('')
            newStr.push(str[i].split('').reverse().join(''))
        } else {
            newStr.push(str[i])
        }
    }
    return newStr.join(' ')

}
*/