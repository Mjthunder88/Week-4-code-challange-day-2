function makeUnique (str) {
    let newSet = new Set(str)
    let newArr = Array.from(newSet)
    // console.log(newArr)
     let result = newArr.join('')
    return result
}

// Set takes a copy of what you pass in and puts it in an object 
// you then have to turn that into an array to use array methods on it.
// then I used .join to combine it back into a string. 

 console.log(makeUnique('helloworld'))


 console.log(makeUnique('iwanttoclimbamountain'))


 //Bonus problem

//  Given a rectangular, two-dimensional array filled with either value 1 or value 0,
// write a function that returns the same array with any positions "adjacent" to a 1
// also turned into 1s.

// Example:
// Function input:
// [
//     [0,1,0,0,0,1],
//     [0,0,0,0,0,0],
//     [0,0,0,1,0,0],
//     [0,0,0,0,0,0]
// ]
// Function output:
// [
//     [1,1,1,0,1,1],
//     [0,1,0,1,0,1],
//     [0,0,1,1,1,0],
//     [0,0,0,1,0,0]
// ]