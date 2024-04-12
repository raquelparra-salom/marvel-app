import { Character } from "../../views/CharacterList/interfaces";

export interface IFavoriteIconProp {
  isFavorite: boolean;
  onToggle: () => void;
}

export interface IFavoriteToggleProp {
  character: Character;
}
