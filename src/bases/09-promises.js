import { getHeroesById } from "./bases/08-imports-exports"

/* console.log('Inicio')

new Promise( (resolve, reject) => {

    console.log('cuerpo de la promesa')
    resolve('Promesa resuelta')

} )
.then( console.log ) //Esto es igual que la siguiente línea, el primer parámetro del callback pasa como primer parámetro de la siguiente función
.catch( err => console.error( err ) )

console.log('Fin') */

const getHeroByIdAsync = ( id ) => {

    return new Promise( ( resolve, reject ) => {

        setTimeout( () => {
            const hero = getHeroesById( id )

            if( hero ) {
                resolve( hero )
            } else {
                reject( 'El héroe no existe' )
            }

            resolve( hero )
        }, 1000)

    } )

}

getHeroByIdAsync(1)
    .then( hero => {
        console.log(`El héroe es: ${ hero.name }`)
    } )
    .catch( console.error )