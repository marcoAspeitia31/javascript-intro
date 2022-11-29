const myPromise = () => {
    return new Promise( ( resolve, reject ) => {
        setTimeout( () => {
            //resolve('Tenemos un valor en la promesa')

            reject('Reject de la promesa')
        }, 5000 );
    })
}

const medirTiempoAsync = async () => {

    try {
        console.log('inicio')

        await myPromise()
        
        console.log('fin')

        return 'fin de medir tiempo async'
            
    } catch (error) {

        throw 'Error en medirTiempoAsync'

    }
    
}

medirTiempoAsync()
    .then( valor => console.log( 'Then: ', valor ) )
    .catch( err => console.error( 'Error:', err ) )
