import { useState } from 'react';
import { IUseFavouriteContext } from './interfaces';
import { Character } from '../../views/CharacterList/interfaces';

const useFavouriteContext = (): IUseFavouriteContext => {
  const [charactersFav, setCharactersFav] = useState<Character[]>([]);

  const addFav = (character: Character) => {
    setCharactersFav([...charactersFav, character]);
  };

  const deleteFav = (id: number) => {
    setCharactersFav(charactersFav.filter((item) => item.id !== id));
  };

  return {
    states: {
      charactersFav,
    },
    actions: {
      addFav,
      deleteFav,
    },
  };
};

export default useFavouriteContext;
