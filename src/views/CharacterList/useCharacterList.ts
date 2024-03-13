import { useState, useEffect } from 'react';
import CryptoJs from 'crypto-js';
import { CharactersListResponse, Character, IUseCharacterList } from './interfaces';

const useCharacterList = (): IUseCharacterList => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [filterText, setFilterText] = useState<string>('');

  const ts = new Date().getTime();
  const hash = CryptoJs.MD5(
    ts + import.meta.env.VITE_PRIVATE_TOKEN_MARVEL + import.meta.env.VITE_PUBLIC_TOKEN_MARVEL,
  );
  const finalUrl = `${import.meta.env.VITE_BASE_URL}/characters?limit=50&ts=${ts}&apikey=${import.meta.env.VITE_PUBLIC_TOKEN_MARVEL}&hash=${hash}`;
  const filterlUrl = `${finalUrl}&nameStartsWith=${filterText}`;

  useEffect(() => {
    setLoading(true);
    fetch(filterText !== '' ? filterlUrl : finalUrl)
      .then((response) => response.json())
      .then((response: CharactersListResponse) => {
        setCharacters(response.data.results);
        setTotal(response.data.limit);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
        setCharacters([]);
        setLoading(false);
      });
  }, [filterText]);

  const handleChangeInput = (text: string) => {
    setFilterText(text);
  };

  return {
    states: { characters, loading, total, filterText },
    actions: { handleChangeInput },
  };
};

export default useCharacterList;
