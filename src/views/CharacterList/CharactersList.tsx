import React, { useState, useEffect } from 'react';
import CryptoJs from 'crypto-js';
import { CharactersListResponse, Character } from './interfaces';
import Card from '../../components/Card/Card';
import './styled.scss';
import Filter from '../../components/Filter/Filter';
import useCharacterList from './useCharacterList';

export function CharactersList() {
 const {states: { characters, loading, total, filterText }, actions: { handleChangeInput }} =  useCharacterList();

  return (
    <>
      <Filter handleChange={handleChangeInput} value={filterText} count={total} />

      {loading && <h1>Cargando</h1>}

      {characters.length > 0 && (
        <div className="cards-container">
          {characters.map((character, index) => (
            <Card key={index} character={character} />
          ))}
        </div>
      )}
    </>
  );
}
