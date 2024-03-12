import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import CryptoJs from 'crypto-js';
import { ComicsCharacterResponse, IUseComicsCharacter } from './interfaces';
import { Character, CharactersListResponse } from '../CharacterList/interfaces';
import './styled.scss';


const useComicsCharacter = (): IUseComicsCharacter => {
    const { characterId } = useParams();
    const [comics, setComics] = useState<ComicsCharacterResponse>();
    const [character, setCharacter] = useState<Character>();
    const [loading, setLoading] = useState<boolean>(false);

    const urlComics = `${import.meta.env.VITE_BASE_URL}/characters/${characterId}/comics?limit=20&`;
    const urlCharacter = `${import.meta.env.VITE_BASE_URL}/characters/${characterId}`;

    const ts = new Date().getTime();
    const hash = CryptoJs.MD5(
        ts + import.meta.env.VITE_PRIVATE_TOKEN_MARVEL + import.meta.env.VITE_PUBLIC_TOKEN_MARVEL,
    );
    const finalUrl = `${urlComics}ts=${ts}&apikey=${import.meta.env.VITE_PUBLIC_TOKEN_MARVEL}&hash=${hash}`;
    const finalUrlCharacter = `${urlCharacter}?ts=${ts}&apikey=${import.meta.env.VITE_PUBLIC_TOKEN_MARVEL}&hash=${hash}`;

    useEffect(() => {
        setLoading(true);
        fetch(finalUrl)
            .then((response) => response.json())
            .then((data) => {
                setComics(data);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err.message);
                setLoading(false);
            });
        fetch(finalUrlCharacter)
            .then((response) => response.json())
            .then((data: CharactersListResponse) => {
                if (data.data.results.length > 0) {
                    setCharacter(data.data.results[0]);
                }
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);


    return {
        states: { comics, loading, character },
    }

};

export default useComicsCharacter;

