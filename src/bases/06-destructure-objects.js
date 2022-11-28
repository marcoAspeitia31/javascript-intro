const person = {
    name: 'Tony',
    age: 45,
    codeName: 'Ironman'
}

//Desestructurar un objeto en js es crear varias constantes a través de las propiedades de un objeto
const { name, age, codeName, power = 'Sin poderes' } = person

/* console.log( name )
console.log( age )
console.log( codeName )
console.log( power )
 */

const createHero = ( { name, age, codeName, power = 'Sin poderes' } ) => ({
    id: 123123,
    name: name,
    age: age,
    codeName, //Si el nombre de la propiedad recibida es igual al nombre de la propiedad que se define entonces se puede obviar el crear una propiedad nueva
    power
})

console.log( createHero( person ) )