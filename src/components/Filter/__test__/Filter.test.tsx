import { render } from '@testing-library/react';

import { Filter } from '../Filter';

test('render filter', async () => {
  const handleChange = jest.fn();
  const { container } = render(<Filter count={10} value="Test" handleChange={handleChange} />);
  expect(container).toMatchSnapshot('data');
});
