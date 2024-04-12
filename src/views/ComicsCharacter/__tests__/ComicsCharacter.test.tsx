import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ComicsCharacter } from '../ComicsCharacter';
import { character1, dataComic } from './data';
import '@testing-library/jest-dom'

jest.mock('../useComicsCharacter', () => ({
    default: () => ({
        states: { character: character1, comics: dataComic, loading: false },
    }),
}));

describe('ComicsCharacter component', () => {
    it('Should render ComicsCharacter component ', async () => {
        const { container, getByText } = render(
            <MemoryRouter>
                <ComicsCharacter />
            </MemoryRouter>
        );
        expect(container).toMatchSnapshot();
        expect(getByText("3-D Man 1")).toBeInTheDocument();
        expect(getByText("Who Is...? M.O.D.O.K. Infinity Comic (2023) #1")).toBeInTheDocument();
        expect(getByText("Avengers Unlimited Infinity Comic (2022) #17")).toBeInTheDocument();
        expect(getByText("X-Men Unlimited Infinity Comic (2021) #2")).toBeInTheDocument();
        expect(getByText("X-Men Unlimited Infinity Comic (2021) #1")).toBeInTheDocument();
    });
});
