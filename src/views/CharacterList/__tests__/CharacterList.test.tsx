import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { CharactersList } from '../CharactersList';

jest.mock('../useCharacterList', () => ({
    default: () => ({
        states: { characters: [], loading: false, total: 10, filterText: "" },
        actions: { handleChangeInput: jest.fn() }
    }),
}));

describe('CharactersList component', () => {
    it('Should render CharactersList component ', async () => {

        const { container } = render(
            <MemoryRouter>
                <CharactersList />
            </MemoryRouter>
        );
        expect(container).toMatchSnapshot();
    });
});
