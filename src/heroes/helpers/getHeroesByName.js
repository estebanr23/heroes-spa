import { heroes } from "../data/heroes";

export const getHeroesByName = ( name = '' ) => {

    name = name.toLocaleLowerCase().trim(); // Convierte todo a minuscula

    if( name.length === 0 ) return [];

    return heroes.filter(
        hero => hero.superhero.toLocaleLowerCase().includes( name )
    );
}