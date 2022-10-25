/*
REACTO
Recite
- Restate the problem
Examples
- List examples of inputs and outputs for the problem
Approach
- State the steps you will take to solve the problem
Code
- Implement the code for the problem
Test
- Walk through the code you wrote line by line and see if the result is what you're expecting
Optimize
- Attempt to optimize your solution
*/


// Input: ["a","a","b","b","b","c"]

// Output: {
//   a: 2,
//   b: 3,
//   c: 1
// }

//reduce example
//shows how date is transformed from and array to an object
const finalOutput = ["a", "a", "b", "b", "b", "c"].reduce((accumulator, current) => {
    console.log("acc: ", accumulator)
    console.log("cur: ", current)

    const accumulatorCopy = {
        ...accumulator  //spread to make a copy
    }

    console.log(accumulatorCopy)

    if (!accumulatorCopy.hasOwnProperty(current)) {
        accumulatorCopy[current] = 1
    } else {
        accumulatorCopy[current]++
    }

    console.log(accumulatorCopy)
    return accumulatorCopy
}, {})

console.log(finalOutput)
console.log("hi")