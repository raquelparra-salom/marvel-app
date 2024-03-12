import { ICardProp } from './interfaces';
import './styled.scss';
import { Link } from 'react-router-dom';
import { FavoriteToggle } from '../FavoriteIcon';

export const Card = ({ character }: ICardProp) => {
  
  return (
    <div className="card">
      <Link to={`/comics/${character.id}`}>
        <img
          className="image"
          src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
        />
      </Link>
      <div className="info">
        <span className="title">{character.name}</span>
        <FavoriteToggle character={character} />

      </div>
    </div>
  );
};

export default Card;
