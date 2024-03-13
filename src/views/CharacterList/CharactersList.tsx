import Card from '../../components/Card/Card';
import './styled.scss';
import Filter from '../../components/Filter/Filter';
import useCharacterList from './useCharacterList';
import { ProgressBar } from '../../components/ProgressBar';

export function CharactersList() {
  const {
    states: { characters, loading, total, filterText },
    actions: { handleChangeInput },
  } = useCharacterList();

  return (
    <>
      {loading && <ProgressBar />}
      <Filter handleChange={handleChangeInput} value={filterText} count={total} />
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
