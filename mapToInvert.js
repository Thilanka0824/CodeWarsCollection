/*
function invert
takes 1 parameter: array of numbers

*/


function invert(array) {
    let resultArray = [];
    resultArray = array.map(function(x){
        return x * -1;
    })
    return resultArray
 }
 console.log(invert([1,2,3,4,5]))
 // returns [ -1, -2, -3, -4, -5 ]