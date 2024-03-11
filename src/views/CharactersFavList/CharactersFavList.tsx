import React, { useState, useContext, useEffect } from 'react';
import { Character } from './interfaces';
import Card from '../../components/Card/Card';
import './styled.scss';
import Filter from '../../components/Filter/Filter';
import { FavoriteContext } from '../../components/Layout/Layout';

export function CharactersFavList() {
   const {charactersFav}= useContext(FavoriteContext);
   const [charactersFitered, setCharactersFiltered] = useState<Character[]>(charactersFav);
   const [filterText, setFilterText] = useState<string>('');
   
   useEffect(() => {
    setCharactersFiltered(charactersFav)
   },[charactersFav])

   const handleChangeInput = (text:string) => {
      setFilterText(text)
      setCharactersFiltered( charactersFav.filter(character => (
            character.name.toLocaleLowerCase().includes(text)
      )))
   }

  return (
   <>
      <Filter handleChange={handleChangeInput} value={filterText} count={charactersFav.length}/>
      <div className="cards-container">
        {charactersFitered.map((character, index)=> (
          <Card  key={index} character={character}/>
        ))}
      </div>
   </> 
  );
}

