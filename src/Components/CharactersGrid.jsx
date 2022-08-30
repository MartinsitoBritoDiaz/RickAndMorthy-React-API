import { useFetchCharacters } from "../hooks/useFetchCharacters"
import { CharacterItem } from "./CharacterItem";

export const CharactersGrid = () => {
    const { characters, isLoading } = useFetchCharacters();

    console.log(characters)
    return(
        <div className="charactersGrid">
            {
                characters.map( character => (
                    <CharacterItem
                        key={ character.id }
                        { ...character }
                    />
                ))
            }
        </div>
    )
}