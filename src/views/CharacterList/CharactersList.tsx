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
    const publicToken = '7a2679f25862bc03be7bd5e2b0b35edc'
    const privateToken= 'a77e7e6a8f4d444ec4ef952f155318688eafbe6a'
    const ts = new Date().getTime();
    const hash = CryptoJs.MD5(ts+privateToken+publicToken)
    const finalUrl = `${url}?ts=${ts}&apikey=${publicToken}&hash=${hash}`
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
   //       <input type='text' placeholder='Search a Character...' value={filterText} onChange={(e) => setFilterText(e.target.value)}/>
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

