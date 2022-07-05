/* 
Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

*/

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
