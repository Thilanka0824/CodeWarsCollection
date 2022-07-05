/*
gooseFilter - uses filter

1 parameter - birds array (array of strings)

//indexOf
array = [1, 3, 5]
array.indexOf(5) => returns the index of the number 5. in this case, 5 is at index 2, so it returns 2
array.indexOf(6) => returns -1 if it cannot find the item

  let myArray = ["cat", 'dog', 'fish']

  console.log(myArray.indexOf('dog')); //1
  console.log(myArray.indexOf('fish')); //2
  console.log(myArray.indexOf('bear')); //-1


condition:
if item (x) is not in geese array, add it to result array
return  geese.indexOf(x) === -1 
//if indexOf(item in birds array is equal to -1, then the item must NOT be in the geese array, so we can add it to the our output

returning an array without the geese in it
*/

console.log(gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]))

function gooseFilter(birds){
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    return birds.filter(function(x){
        console.log("x: " + x);
        console.log("index: " + geese.indexOf(x));
        return geese.indexOf(x) === -1;
    })

    //geese.indexOf("Mallard") if -1, add, else go to
    //if item in birds array is NOT in geese array, add to final array
}
    // return an array containing all of the strings in the input array except those that match strings in geese
  ;

// let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

// let x = '';
// x = "Pilgrim";
// console.log(geese.indexOf(x)) //3
// x = "African";
// console.log(geese.indexOf(x)) //0
// x = "other"
// console.log(geese.indexOf(x)) //-1

