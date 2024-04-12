import './styled.scss';
import { CharacterResume } from '../../components/CharacterResume/';
import { ComicCard } from '../../components/ComicCard/';
import useComicsCharacter from './useComicsCharacter';
import { ProgressBar } from '../../components/ProgressBar';

export function ComicsCharacter() {
  const {
    states: { character, comics, loading },
  } = useComicsCharacter();

  return (
    <>
      {loading && <ProgressBar />}
      {character && <CharacterResume character={character} />}
      <div className="comics">
        <div className="container">
          <div className="frame">
            {comics?.data.results.map((comic, index) => (
              <ComicCard
                thumbnail={comic.thumbnail}
                date={new Date(comic.dates[0].date).getFullYear()}
                name={comic.title}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
