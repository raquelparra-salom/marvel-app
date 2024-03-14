import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { CharactersList } from '../CharactersList';
import '@testing-library/jest-dom'
import { character1 } from './data';

jest.mock('../useCharacterList', () => ({
    default: () => ({
        states: { characters: [character1], loading: false, total: 10, filterText: "Texto de filtrado" },
        actions: { handleChangeInput: jest.fn() }
    }),
}));

describe('CharactersList component', () => {
    it('Should render CharactersList component ', async () => {

        const { getByText, container } = render(
            <MemoryRouter>
                <CharactersList />
            </MemoryRouter>
        );
        expect(container).toMatchSnapshot();

        expect(getByText("3-D Man 1")).toBeInTheDocument();

    });
});
