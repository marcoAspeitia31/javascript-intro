/*
function saludar( xyz ) {
    return `Hola mundo ${xyz}`
}

const saludar = function( xyz ){
    return `Hola mundo ${xyz}`
}

*/
//Forma natural de arrow functions
const saludar = ( nombre ) => {
    return `Hola mundo ${nombre}`
}
//Forma simplificada
const saludarNew = ( nombre ) => `Hola ${nombre}`
//Nota, si sólo se tiene un argumento se pueden omitir los paréntesis en estos

//Forma simplificada
const saludarPorDefecto = ( nombre = 'Marco' ) => `Hola ${nombre}`

const nombre = 'Tony'

console.log( saludar(nombre) )
console.log( saludarNew(nombre) )
console.log( saludarPorDefecto() )

//Return de arrow function a return implícito
const getUser = () => {
    return {
        uid: 'ABC123',
        username: 'Marco31'
    }
}
const getUserImplicit = () => ({
    uid: 'ABC123',
    username: 'Marco31'
})

console.log( getUser() )
console.log( getUserImplicit() )

const heroes = [
    {
        id: 1,
        name: 'Batman'
    },
    {
        id: 2,
        name: 'Spiderman'
    }
]

const existe = heroes.some( ( item ) => {
    if( item.id === 1 ) {
        return true
    }
} )

const existe2 = heroes.find( ( item ) => item.id === 1 )

const { name } = heroes.find( ( item ) => item.id === 1 )

console.log( existe )
console.log( existe2 )
console.log( name )