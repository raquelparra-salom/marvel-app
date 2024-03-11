import React, {createContext, useState} from 'react'

import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import ErrorBoundary from "../ErrorBoundary";
import { IFavoriteContext } from './interfaces';
import { Character } from '../../views/CharactersFavList/interfaces';

export const FavoriteContext = createContext<IFavoriteContext>({} as IFavoriteContext);

export const Layout = () => {
  const [charactersFav, setCharactersFav] = useState<Character[]>([]);

const  addFav =  (character: Character) => {
    setCharactersFav([...charactersFav, character])
};

 const deleteFav =(id: number) => {
  setCharactersFav(charactersFav.filter(item => item.id !== id));
};

  return (
      <ErrorBoundary>
        <FavoriteContext.Provider value={{charactersFav, addFav, deleteFav}}>
          <Header/>
          <div id="detail">
            <Outlet />
          </div>
        </FavoriteContext.Provider>
      </ErrorBoundary>
    );
  }

  export default Layout;