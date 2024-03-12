import { ICharacterResumeProp } from './interfaces';
import {FavoriteToggle} from '../FavoriteIcon/';
import './styled.scss';

export const CharacterResume = ({ character }: ICharacterResumeProp) => {
  return (
    <div className="wrapper">
      <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} />
      <div className="info">
        <div className="block-title">
          <h1 className="title">{character.name}</h1>
          <FavoriteToggle character={character} />
        </div>
        <div className="description">{character.description}</div>
      </div>
    </div>
  );
};

export default CharacterResume;
