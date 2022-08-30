import { useEffect, useState } from "react";
import { getCharacters } from "../helpers/getCharacters";

export const useFetchCharacters = () => {
    const [ characters, setCharaters ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);

    const getCompleteCharacters = async () => {
        const newCharacters = await getCharacters();
        setCharaters(newCharacters);
        setIsLoading(false);
    }

    useEffect( () => { 
        getCompleteCharacters(); 
    }, []);

    return{
        characters,
        isLoading,
    }
}