// Find The Parity Outlier

/*

You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

Examples
[2, 4, 0, 100, 4, 11, 2602, 36]
Should return: 11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21]
Should return: 160 (the only even number)

*/

let arrayOdd = [160, 3, 1719, 19, 11, 13, -21]
let arrayEven = [2, 4, 0, 100, 4, 11, 2602, 36]


function findOutlier(integers) {
    let outlier = 0;
    let isEvenArray = false;

    let num0 = integers[0];
    let num1 = integers[1];
    let num2 = integers[2];

    if (num0 % 2 === 0 && num1 % 2 === 0) {
        isEvenArray = true;
    } else if (num0 % 2 === 0 && num2 % 2 === 0) {
        isEvenArray = true;
    } else if (num1 % 2 === 0 && num2 % 2 === 0) {
        isEvenArray = true;
    }

    if (isEvenArray === true) {
        //find the odd number
        for (i = 0; i < integers.length; i++) {
            if (integers[i] % 2 !== 0) {
                outlier = integers[i]
            }
        }
    } else if (isEvenArray === false) {
        //find the even number
        for (i = 0; i < integers.length; i++) {
            if (integers[i] % 2 === 0) {
                outlier = integers[i]
            }
        }
    }
    return outlier
}
