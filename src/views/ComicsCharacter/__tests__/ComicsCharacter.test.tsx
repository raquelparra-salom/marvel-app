import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ComicsCharacter } from '../ComicsCharacter';
import { character1, dataComic } from './data';

jest.mock('../useComicsCharacter', () => ({
    default: () => ({
        states: { character: character1, comics: dataComic, loading: false },
    }),
}));

describe('ComicsCharacter component', () => {
    it('Should render ComicsCharacter component ', async () => {

        const { container } = render(
            <MemoryRouter>
                <ComicsCharacter />
            </MemoryRouter>
        );
        expect(container).toMatchSnapshot();
    });
});
