import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Card from '../Card';
import { ICardProp } from '../interfaces';
//TODO: 
const character: ICardProp = {
  character: {
    id:0,
    name: 'test',
    description: 'test',
    modified: 'test',
    thumbnail: {
      path: '',
      extension: '',
    },
    resourceURI: '',
    comics: {
      available: 0,
    }
    series: {

    },
    stories: {}
    evens: {}
    urls:{}
  }
};
test('loads and displays greeting', async () => {
  // ARRANGE
  const {container} = render(<Card character={character} />);
  expect(container).toMatchSnapshot('data');

});
