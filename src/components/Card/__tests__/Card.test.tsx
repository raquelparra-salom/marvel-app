import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import Card from '../Card'
import { Character } from '../../../views/CharactersFavList/interfaces'

const character: Character={
id: 2
}
test('loads and displays greeting', async () => {
  // ARRANGE
  render(<Card character={character} />)


})