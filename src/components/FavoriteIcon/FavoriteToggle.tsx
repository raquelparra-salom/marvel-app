import { useContext, useState } from 'react';
import { FavoriteContext } from '../Root/Root';
import './styled.scss';
import { IFavoriteToggleProp } from './interface';
import FavoriteIcon from './FavoriteIcon';

export const FavoriteToggle = ({ character }: IFavoriteToggleProp) => {
  const { addFav, deleteFav, charactersFav } = useContext(FavoriteContext);
  const [isFavorite, setIsFavorite] = useState(charactersFav.some((c) => c.id === character.id));
  const toggleFavorite = () => {
    if (isFavorite) {
      deleteFav(character.id);
    } else {
      addFav(character);
    }
    setIsFavorite(!isFavorite);
  };
  return <FavoriteIcon isFavorite={isFavorite} onToggle={toggleFavorite} />;
};

export default FavoriteToggle;
