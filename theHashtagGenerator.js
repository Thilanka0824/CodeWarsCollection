/*
The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.



Examples
" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false
*/


function generateHashtag(str) {
  let removeEmptyArr = [];
  let splitWordArr = [];
  let capLetter = [];
  let finalArr = [];
  let finalStr = "";

  if (str.length === 0) {
    return false;
  }

  removeEmptyArr = str.split(" ");

  for (let i = 0; i < removeEmptyArr.length; i++) {
    if (removeEmptyArr[i].length === 0) {
      removeEmptyArr.splice(i, 1);

      i--;
    }
  }

  for (let x = 0; x < removeEmptyArr.length; x++) {
    splitWordArr = removeEmptyArr[x].split("");

    capLetter = splitWordArr[0].toUpperCase();

    splitWordArr.shift(splitWordArr[0]);
    splitWordArr.unshift(capLetter[0]);
    splitWordArr = splitWordArr.join("");
    finalArr.push(splitWordArr);
  }

  if (finalArr.length > 0) {
    finalStr = `#${finalArr.join("")}`;
  } else {
    return false;
  }

  if (finalStr.length > 140) {
    return false;
  }

  return finalStr;
}






generateHashtag("Do We have A Hashtag");


/*
function generateHashtag (str) {
    let removeEmptyArr = []
    let splitWordArr = []
    let capLetter = []
    let finalArr = []
    let finalStr = ''

    if(str.length === 0){
         return false;
    }

    removeEmptyArr = str.split(" ")
    console.log(`removeEmptyArr: ${removeEmptyArr}`)
    console.log(removeEmptyArr)
    
    for(let i = 0; i < removeEmptyArr.length; i++){
        //console.log(removeEmptyArr[i])
        if(removeEmptyArr[i].length === 0){
            //console.log('hi')
            
            removeEmptyArr.splice(i, 1)
            //console.log(`done: ${i}`)
            i--
        }
        
    }
    
    for(let x = 0; x < removeEmptyArr.length; x++) {
        
        splitWordArr = removeEmptyArr[x].split('')
        console.log(splitWordArr)
        capLetter = splitWordArr[0].toUpperCase()
        console.log("splitWordArr: " + splitWordArr);
        console.log("capLetter: " + capLetter);
        //capLetterAndWord.push(capLetter)
        splitWordArr.shift(splitWordArr[0])
        splitWordArr.unshift(capLetter[0])
        splitWordArr = splitWordArr.join('')
        finalArr.push(splitWordArr)

        
        
        //console.log("splitWordArr: " + splitWordArr);
        console.log("finalArr: " + finalArr);

    }
    //finalStr = `#${finalArr.join('')}`
    //console.log("finalStr: " + finalStr);
    
    if (finalArr.length > 0) {
      finalStr = `#${finalArr.join("")}`;
    } else {
        return false
    }
    
    console.log("finalStr: " + finalStr);
    console.log("finalStr: " + finalStr.length);
    
    if(finalStr.length > 140){
        return false;
    }
    console.log('last line')
    return finalStr
    //splitWordArr = removeEmptyArr.split(" ");
    //console.log('remove: ' + removeEmptyArr);
    //console.log(splitWordArr)
}

*/

