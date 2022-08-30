import { getCharacters } from "../helpers/getCharacters"
import { CharactersGrid } from './CharactersGrid'

export const Card = () => {

    return ( 
        <div className="card">
            <h1 className="title">Rick And Morthy</h1>

            <CharactersGrid />
        </div>
    )
}