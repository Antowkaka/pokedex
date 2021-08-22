const getPokemonByUrl = async (url) => {
    const res = await fetch(url);

    return await res.json();
}

export default getPokemonByUrl;