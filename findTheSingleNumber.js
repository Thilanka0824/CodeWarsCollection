// Single Number //Code Wars

// [1, 1, 2, 2, 3, 4, 4] // answer 3
// [0, 1, 2, 3, 4, 5, 6] // index

let numbersArr = [8, 4, 1, 7, 2, 4, 1, 3, 3, 2, 5, 6, 9, 6, 8, 7, 9]

function singleNumber(arr) {
    arr.sort((a,b) => a-b)

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i + 1] && arr[i + 1] !== arr[i + 2]){
            return arr[i + 1]
        }
        
    }
}
console.log(singleNumber(numbersArr))