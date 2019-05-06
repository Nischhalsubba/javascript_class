//Objects
//objects are defined by '{ }'

let example1 = {
    firstName: 'Nischhal',

    lastName: 'Subba',

    age: 10,

    address: {
        city: 'Ktm',
        state: 3
    }

}

//checking wheather key has stored value or not by using 'hasOwnProperty'

console.log(example1.hasOwnProperty('lastName'))

// console.log(example1.address.state)


//Object challanges
let example5 = {
    firstName: 'Dylan'
};

let example6 = Object.assign({}, example5)
// Object.assign({},exaple5) -- { } creating emply object to store example 6
//Object.assign is used to copy the values from source object to target object

example6.lastName = 'Israel'


console.log(example5)
console.log(example6)