import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import './styled.scss';
import { IFavoriteIconProp } from './interface';

export const FavoriteIcon = ({ isFavorite, onToggle }:IFavoriteIconProp) => (
  <div className="favorite-icon" onClick={onToggle}>
    {isFavorite ? (
      <FontAwesomeIcon className='heart-selected' icon={faHeartSolid}  />
    ) : (
      <FontAwesomeIcon className='heart-default' icon={faHeart}  />
    )}
  </div>
);

export default FavoriteIcon;
