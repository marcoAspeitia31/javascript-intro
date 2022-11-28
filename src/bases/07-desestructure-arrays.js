const characters = ['Goku', 'Vegeta', 'Trunks']

const [ goku, vegeta, trunks ] = characters
const [ , , trunks2 ] = characters
const [ , , , goten = 'No tiene valor' ] = characters

console.log(goku, vegeta, trunks)
console.log(trunks2)
console.log(goten)

const returnArray = ( array ) => {
    return [ 'ABC', 123 ]
}

const returnArray2 = ( [ letters2, numbers2 ] ) => {
    return [ letters2, numbers2 ]
}

const [ letters, numbers ] = returnArray()
const [ letters2, numbers2 ] = returnArray( [ 'ABC', 123 ] )

console.log( letters, numbers )
console.log( letters2, numbers2 )