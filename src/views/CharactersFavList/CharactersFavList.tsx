import { Card } from '../../components/Card/';
import './styled.scss';
import { Filter } from '../../components/Filter/';
import useCharacterFavList from './useCharacterFavList';

export function CharactersFavList() {
  const {
    states: { charactersFitered, charactersFav, filterText },
    actions: { handleChangeInput },
  } = useCharacterFavList();

  return (
    <>
      <Filter handleChange={handleChangeInput} value={filterText} count={charactersFav.length} />
      <div className="cards-container">
        {charactersFitered.map((character, index) => (
          <Card key={index} character={character} />
        ))}
      </div>
    </>
  );
}
