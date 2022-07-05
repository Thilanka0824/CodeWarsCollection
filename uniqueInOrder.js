// Unique In Order

/*
Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]

////=============

// 1 parameter: iterable 
(either an array of numbers/characters or a string)

AAAABBBCCDAABBB


if(iterable[i] !== iterable[i + 1]){
    finalArray.push[itrable]
}

-finalArray variable 
for loop to go through iterable

conditional to check if letter is the same 


returning an finalArray
*/

let string1 = 'AAAABBBCCDAABBB'
let string2 = 'ABBCcAD'         
let arr2 = [1,2,2,3,3]       

function uniqueInOrder(iterable){
    let finalArray = []
    for(i = 0; i < iterable.length; i++){
        if(iterable[i] !== iterable[i + 1]){
        finalArray.push(iterable[i])
        }
    } 
    return finalArray
}
console.log(uniqueInOrder(string2))