const apiKey = 'mNJWN8kk70ODvZurQO55CeBfzYRuyVjy'
//https://api.giphy.com/v1/gifs/random?api_key=mNJWN8kk70ODvZurQO55CeBfzYRuyVjy

fetch( `https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }` )
    
    .then( resp => {
        resp.json()
            .then( resp => {
                const url = resp.data.images.original.url

                const img = document.createElement('img')
                img.src = url

                document.body.append( img )
            } )
    }) 
   
    /* .then( resp => resp.json() )
    .then( ( { data } ) => {
        const { url } = data.images.original

        const img = document.createElement('img')
        img.src = url

        document.body.append( img )
    }) */
    .catch( e => console.log(e) )