import { Character } from '../../views/CharacterList/interfaces';

export interface IFavoriteContext {
  charactersFav: Character[];
  addFav: (character: Character) => void;
  deleteFav: (id: number) => void;
}

export interface IUseFavouriteContext {
  states: {
    charactersFav: Character[];
  };
  actions: {
    addFav: (character: Character) => void;
    deleteFav: (id: number) => void;
  };
}
