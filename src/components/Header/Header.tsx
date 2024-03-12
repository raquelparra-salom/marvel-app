import { Link } from 'react-router-dom';

import './styled.scss';
import LogoMarvel from '../../assets/img/Marvel.png';
import LogoFav from '../../assets/img/Fav.png';
import { useContext } from 'react';
import { FavoriteContext } from '../Root/Root';
export const Header = () => {
  const { charactersFav } = useContext(FavoriteContext);

  return (
    <header>
      <div className="logoWrap">
        <Link className="logo" to={`/list`}>
          <img src={LogoMarvel} width={'130px'} height={'52px'} />
        </Link>
      </div>
      <div className="iconWrap">
        <Link to={'fav'}>
          <img src={LogoFav} />
        </Link>
        <div className="counterFav">{charactersFav.length}</div>
      </div>
    </header>
  );
};
export default Header;
