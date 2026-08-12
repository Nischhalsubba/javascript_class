let firstName = 'Nishchal'

let lastName = "Subba"

// console.log(`${firstName} ${lastName}                     `.trim().length)


//This is bad practice
const fullName = firstName + ' ' + lastName


//Using back tick
let fullName2 = `${firstName} ${lastName}`

console.log(fullName2)