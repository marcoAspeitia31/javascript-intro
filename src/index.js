console.log('Inicio')

new Promise( (resolve, reject) => {

    console.log('cuerpo de la promesa')
    resolve('Promesa resuelta')

} )
.then( console.log ) //Esto es igual que la siguiente línea, el primer parámetro del callback pasa como primer parámetro de la siguiente función
.catch( err => console.error( err ) )

console.log('Fin')