import  { useContext, useState } from 'react';
import { ICharacterResumeProp } from './interfaces';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart  } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faHeartSolid} from '@fortawesome/free-solid-svg-icons';
import { FavoriteContext } from '../Layout/Layout';
import './styled.scss';

export const CharacterResume = ({character}: ICharacterResumeProp) => {
    const {addFav, deleteFav, charactersFav} = useContext(FavoriteContext)
    const [isFavorite, setIsFavorite] = useState(charactersFav.includes(character));
    const toggleFavorite = () => {
        if(isFavorite){
            deleteFav(character.id)
        }else{
            addFav(character)
        }
        setIsFavorite(!isFavorite);
    };
    return (
    <div className='wrapper'>
        <img  src={`${character.thumbnail.path}.${character.thumbnail.extension}`}/>
        <div className='info'>
            <div>
                <h1 className='title' >{character.name}</h1>
                <div className="favorite-icon" onClick={toggleFavorite}>
                    {isFavorite ?<FontAwesomeIcon icon={faHeartSolid} style={{color: "#ff0000",}} /> : <FontAwesomeIcon icon={faHeart} style={{ color: '#ffffff' }} />}
                </div>
            </div>
            <div className='description' >{character.description}</div>
        </div>
    </div>
    )
}

export default CharacterResume;