import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { CharactersFavList } from '../CharactersFavList';
import { FavoriteContext } from '../../../components/Root/Root';
import { IFavoriteContext } from '../../../components/Root/interfaces';
import { character1, character2 } from './data';

describe('CharactersFavList component', () => {
  it('Should render CharactersFavList component ', async () => {

    const context: IFavoriteContext = {
      charactersFav: [character1, character2],
      addFav: jest.fn(),
      deleteFav: jest.fn()
    }

    const { container } = render(
      <MemoryRouter>
        <FavoriteContext.Provider value={context}>
          <CharactersFavList />
        </FavoriteContext.Provider>
      </MemoryRouter>
    );
    expect(container).toMatchSnapshot();
  });
});
