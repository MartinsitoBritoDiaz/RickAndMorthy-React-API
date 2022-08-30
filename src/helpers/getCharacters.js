

export const getCharacters = async () => {
    const url = 'https://rickandmortyapi.com/api/character';
    const resp = await fetch( url );
    const { results } = await resp.json();

    const characters = results.map( character => ({
            id: character.id,
            name: character.name,
            status: character.status,
            species: character.species,
            gender: character.gender,
            url: character.image,
        })
    );
    return characters;
} 