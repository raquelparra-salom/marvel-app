import  { useContext, useState } from 'react';
import { ICardProp } from './interfaces';
import './styled.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart  } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faHeartSolid} from '@fortawesome/free-solid-svg-icons';
import { FavoriteContext } from '../Layout/Layout';
import { Link } from "react-router-dom";

export const Card = ({character}: ICardProp) => {
  const {addFav, deleteFav, charactersFav} = useContext(FavoriteContext)
    const [isFavorite, setIsFavorite] = useState(charactersFav.includes(character));
    console.log(isFavorite)
    const toggleFavorite = () => {
        if(isFavorite){
            deleteFav(character.id)
        }else{
            addFav(character)
        }
        setIsFavorite(!isFavorite);
    };
    return (
    <div className='card' >
        <Link to={`/comics/${character.id}`}>
            <img className='image'  src={`${character.thumbnail.path}.${character.thumbnail.extension}`}/>
        </Link>
        <div className='info'>
            <span className='title' >{character.name}</span>
            <div className="favorite-icon" onClick={toggleFavorite}>
                {isFavorite ?<FontAwesomeIcon icon={faHeartSolid} style={{color: "#ff0000",}} /> : <FontAwesomeIcon icon={faHeart} style={{ color: '#ffffff' }} />}
            </div>
        </div>
    </div>
    )
}

export default Card;