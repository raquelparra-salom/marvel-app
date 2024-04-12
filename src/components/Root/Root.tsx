import  { createContext } from 'react';

import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import ErrorBoundary from '../ErrorBoundary';
import { IFavoriteContext } from './interfaces';
import useFavouriteContext from './useFavouriteContext';

export const FavoriteContext = createContext<IFavoriteContext>({} as IFavoriteContext);

export const Root = () => {
  const {
    states: { charactersFav },
    actions: { addFav, deleteFav },
  } = useFavouriteContext();

  return (
    <ErrorBoundary>
      <FavoriteContext.Provider value={{ charactersFav, addFav, deleteFav }}>
        <Header />
        <div id="detail">
          <Outlet />
        </div>
      </FavoriteContext.Provider>
    </ErrorBoundary>
  );
};

export default Root;
