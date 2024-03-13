import { Character } from '../../views/CharactersFavList/interfaces';

export interface IFavoriteIconProp {
  isFavorite: boolean;
  onToggle: () => void;
}

export interface IFavoriteToggleProp {
  character: Character;
}
