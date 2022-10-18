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