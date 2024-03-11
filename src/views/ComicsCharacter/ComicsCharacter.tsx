import React, { useState, useEffect } from 'react';
import { useParams } from "react-router";
import CryptoJs from 'crypto-js';
import { ComicsCharacterResponse } from './interfaces';
import { Character, CharactersListResponse } from '../CharacterList/interfaces';
import './styled.scss';
import CharacterResume from '../../components/CharacterResume/CharacterResume';
import ComicCard from '../../components/ComicCard/ComicCard';

export function ComicsCharacter() {
  const { characterId } = useParams();
  const [comics, setComics] = useState<ComicsCharacterResponse>();
  const [character, setCharacter] = useState<Character>();
  const urlComics = `http://gateway.marvel.com/v1/public/characters/${characterId}/comics`
  const urlCharacter = `http://gateway.marvel.com/v1/public/characters/${characterId}`
 
  const ts = new Date().getTime();
  const hash = CryptoJs.MD5(ts+import.meta.env.PRIVATE_TOKEN_MARVEL+import.meta.env.APP_PUBLIC_TOKEN_MARVEL)
  const finalUrl = `${urlComics}?ts=${ts}&apikey=${import.meta.env.PUBLIC_TOKEN_MARVEL}&hash=${hash}`
  const finalUrlCharacter = `${urlCharacter}?ts=${ts}&apikey=${import.meta.env.PUBLIC_TOKEN_MARVEL}&hash=${hash}`
  //TODO: PAGINACIÓN
 useEffect(() => {
   fetch(finalUrl)
       .then((response) => response.json())
       .then((data) => {
          setComics(data);
       })
       .catch((err) => {
          console.log(err.message);
   });
   fetch(finalUrlCharacter)
      .then((response) => response.json())
      .then((data: CharactersListResponse) => {
         if(data.data.results.length > 0 ) {setCharacter(data.data.results[0]);}
      })
      .catch((err) => {
         console.log(err.message);
      });
 }, [finalUrl, finalUrlCharacter]);
//TODO: verificar fechas onsale
  return (
    <>
      {character && <CharacterResume character={character} />}
      <div className='container'>
         <div className='frame'>
            {comics?.data.results.map(comic=> (
               <ComicCard thumbnail={comic.thumbnail} date={new Date(comic.dates[0].date).getFullYear()} name={comic.title}/>
            ))}
         </div>
      </div>
   </>
    
  );
}

