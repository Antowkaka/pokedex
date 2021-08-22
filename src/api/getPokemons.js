import {POKEMON_URL, POKEMON_IMAGE_URL} from "../consts";
import getPokemonByUrl from "./getPokemonByUrl";

const getPokemons = async (limit) => {
    const pokemonsListRes = await fetch(`${POKEMON_URL}?limit=${limit}`);
    const pokemonsList = await pokemonsListRes.json();
    return await Promise.all(pokemonsList.results.map(async ({url}) => {
        const pokemon = await getPokemonByUrl(url);
        console.log(pokemon.types);
        return {
            id: pokemon.id,
            img: `${POKEMON_IMAGE_URL}/${pokemon.name}.jpg`,
            name: pokemon.name,
            types: pokemon.types.map(el => el.type.name),
            attack: pokemon.stats[1]['base_stat'],
            defense: pokemon.stats[2]['base_stat'],
            hp: pokemon.stats[0]['base_stat'],
            spAttack: pokemon.stats[3]['base_stat'],
            spDefense: pokemon.stats[4]['base_stat'],
            speed: pokemon.stats[5]['base_stat'],
            weight: pokemon.weight,
            totalMoves: pokemon.moves.length
        };
    }));
}

export default getPokemons;