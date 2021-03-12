
// Destructuring 
// const { mul, div } = require('./operations')



// const { calc } = require('./calc')  // ".js" optionnel à la fin du nom du module
const calc = require('./calc')

let nb1 = calc('*', 10, 2)
console.log(nb1) // output: 20
let nb2 = calc('/', 30, 10)
console.log(nb2) // output: 3

