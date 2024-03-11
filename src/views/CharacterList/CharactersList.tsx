import React, { useState, useEffect } from 'react';
import CryptoJs from 'crypto-js';
import { CharactersListResponse, Character } from './interfaces';
import Card from '../../components/Card/Card';
import './styled.scss';
import Filter from '../../components/Filter/Filter';

export function CharactersList() {
    const [characters, setCharacters] = useState<Character[]>([]);
    const [charactersFitered, setCharactersFiltered] = useState<Character[]>([]);
    const [total, setTotal] = useState<number>(0);
    const [filterText, setFilterText] = useState<string>('');
    const url = "http://gateway.marvel.com/v1/public/characters"
    
    const ts = new Date().getTime();
    const hash = CryptoJs.MD5(ts+import.meta.env.VITE_PRIVATE_TOKEN_MARVEL+import.meta.env.VITE_PUBLIC_TOKEN_MARVEL)
    const finalUrl = `${url}?ts=${ts}&apikey=${import.meta.env.VITE_PUBLIC_TOKEN_MARVEL}&hash=${hash}`
    //TODO: PAGINACIÓN
   useEffect(() => {
      fetch(finalUrl)
         .then((response) => response.json())
         .then((response: CharactersListResponse) => {
            setCharacters(response.data.results);
            setCharactersFiltered(response.data.results);
            setTotal(response.data.total);
         })
         .catch((err) => {
            console.log(err.message);
         });
   }, [finalUrl]);
   //TODO: Hacer un fihcero literals

   const handleChangeInput = (text:string) => {
      setFilterText(text)
      setCharactersFiltered( characters.filter(character => (
            character.name.toLocaleLowerCase().includes(text)
      )))
   }
  return (
   <>
      <Filter handleChange={handleChangeInput} value={filterText} count={total}/>
      <div className="cards-container">
        {charactersFitered.map((character, index)=> (
          <Card  key={index} character={character}/>
        ))}
      </div>
   </> 
  );
}

