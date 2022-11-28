//import { owners } from './data/heroes'
import superHeroes from '../data/heroes'

// getHeroById( id )
// funciones de Flecha
// find

/* const getHeroesById = ( id ) => {
    
    const findHero = superHeroes.find( ( item ) => item.id === id )

    return findHero

} */

const getHeroesById = ( id ) => superHeroes.find( ( item ) => item.id === id )

// getHeroesByOwner( owner )
// []
// filter

/* const getHeroesByOwner = ( owner ) => {

    const filterHeroes = superHeroes.filter( ( item ) => item.owner === owner )

    return filterHeroes

} */

const getHeroesByOwner = ( owner ) => superHeroes.filter( ( item ) => item.owner === owner )

export { getHeroesById, getHeroesByOwner }