import { useState, useContext, useEffect, useMemo } from 'react';
import { IUseCharacterList } from './interfaces';
import './styled.scss';
import { FavoriteContext } from '../../components/Root/Root';
import { Character } from '../CharacterList/interfaces';

const useCharacterFavList = (): IUseCharacterList => {
  const { charactersFav } = useContext(FavoriteContext);
  const [filterText, setFilterText] = useState<string>('');

  const charactersFiltered = useMemo(() => {
    if (!filterText) {
      return charactersFav;
    }
    return charactersFav.filter((character) =>
      character.name.toLocaleLowerCase().includes(filterText)
    );
  }, [charactersFav, filterText]);

  const handleChangeInput = (text: string) => {
    setFilterText(text);

  };
  return {
    states: { charactersFav, charactersFiltered, filterText },
    actions: { handleChangeInput},
  };
};

export default useCharacterFavList;
