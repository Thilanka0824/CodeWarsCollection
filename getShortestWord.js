//// Get Shortest Word
//// find the SHORTEST WORD

const str = "the quick brown fox jumped at over the lazy dog";

function findShort(str){
    
    const strArray = str.split(" "); // splits the string into an array 
    let smallest = strArray[0]; // sets new variable to the 0 index // will use to compare later
    
    for(i = 0; i < strArray.length; i++){ // index starts at 0; if i is less than the length of the index; keep looping thru
        if(strArray[i].length < smallest.length){ // if the length of the item in strArray[i] is smaller than the length of smallest
            smallest = strArray[i]; // then add that item to smallest
        }
    }
    return smallest.length // return the length of smallest

}

console.log(findShort(str))