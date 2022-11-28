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

const even = ( item ) => {
    if( item.id == 1 ) {
        return true
    }
}

const even2 = ( item ) => item.id == 2

console.log( heroes.some( even ) )
console.log( heroes.some( even2 ) )