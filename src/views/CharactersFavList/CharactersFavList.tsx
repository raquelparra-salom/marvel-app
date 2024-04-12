import { Card } from '../../components/Card/';
import './styled.scss';
import { Filter } from '../../components/Filter/';
import useCharacterFavList from './useCharacterFavList';

export function CharactersFavList() {
  const {
    states: { charactersFiltered, filterText },
    actions: { handleChangeInput },
  } = useCharacterFavList();

  return (
    <>
      <Filter handleChange={handleChangeInput} value={filterText} count={charactersFiltered.length} />
      <div className="cards-container">
        {charactersFiltered.map((character) => (
          <Card key={character.id} character={character} />
        ))}
      </div>
    </>
  );
}
