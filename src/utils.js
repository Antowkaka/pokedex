export const generateKey = (pre) => {
    return `${ pre }_${ new Date().getTime() }`;
}

export const prependZeros = (number) =>
    [...Array(3).fill(0), ...number.toString()].join('').slice(-3);

const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1);

export const formatKey = (key) => {
    const splitted = key.split(/(?=[A-Z])/);

    switch (key) {
        case 'hp': return 'HP'
        case 'types': return 'Type'
        case 'spAttack': return splitted[0].toUpperCase() + ' ' + splitted[1]
        case 'spDefense': return splitted[0].toUpperCase() + ' ' + splitted[1]
        case 'totalMoves': return capitalizeFirstLetter(splitted[0]) + ' ' + splitted[1].toLowerCase()
        default: return capitalizeFirstLetter(key);
    }
}

export const extractTypes = (pokemons) => {
    const types = [];

    pokemons.forEach(pokemon => {
        if (pokemon.types.length > 1) {
            pokemon.types.forEach(type => types.push(type));
        } else {
            types.push(pokemon.types[0]);
        }
    });

    return Array.from(new Set(types));
}