import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; 
import Card from '../Card';
import { character1 } from './data';

describe('Renders main page correctly', () => {
  it('Should render the page correctly', async () => {
    const { container } = render(
      <MemoryRouter> 
        <Card character={character1} />
      </MemoryRouter>
    );
    expect(container).toMatchSnapshot('data');
  });
});
