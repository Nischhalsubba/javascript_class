//Arrays

//Arrays start in Zero Index

//Length is always one steps greater then the index value in array

let example = [1, 2, 3, 4]

//pushing value in ararys using "PUSH" which add value from the last
example.push(100)

//Removing the last value in the array using "POP"
example.pop()

//overWriting value in array
example[0] = 'I am a number :p'


console.log(example)


console.log('Array Challange ------------------')

let example1 = ['Dylan', 5, true]

// let example2 = [...example1]
let example2 = example1.map((Element) => {
    return Element
})

//In array you passing by references

example2.push(11)

console.log(example1)

console.log(example2)