import { useState, useContext, useEffect } from 'react';
import { IUseCharacterList } from './interfaces';
import './styled.scss';
import { FavoriteContext } from '../../components/Root/Root';
import { Character } from '../CharacterList/interfaces';

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
    actions: { handleChangeInput },
  };
};

export default useCharacterFavList;
