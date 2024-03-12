

import React, { useState, useContext, useEffect } from 'react';
import { Character, IUseCharacterList } from './interfaces';
import './styled.scss';
import { FavoriteContext } from '../../components/Root/Root';

const useCharacterFavList = (): IUseCharacterList => {
    const { charactersFav } = useContext(FavoriteContext);
    const [charactersFitered, setCharactersFiltered] = useState<Character[]>(charactersFav);
    const [filterText, setFilterText] = useState<string>('');

    useEffect(() => {
        setCharactersFiltered(charactersFav);
    }, [charactersFav]);

    const handleChangeInput = (text: string) => {
        setFilterText(text);
        setCharactersFiltered(
            charactersFav.filter((character) => character.name.toLocaleLowerCase().includes(text)),
        );
    };

    return {
        states: { charactersFav, charactersFitered, filterText },
        actions: { handleChangeInput }
    }

};

export default useCharacterFavList;

