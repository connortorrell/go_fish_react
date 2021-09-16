import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import LobbyView from '../components/LobbyView'
import Player from '../models/Player'
import Game from '../models/Game'

describe('LobbyView', () => {
  const name = 'Player1'
  const player = new Player(name)
  const game = new Game(player, 9)
  const onStart = jest.fn()
  let wrapper

  beforeEach(() => {
    wrapper = render(<LobbyView game={game} onStart={onStart} />)
  })

  it('shows the player', () => {
    expect(wrapper.getByText(`You: ${name}`)).toBeInTheDocument()
  })

  it('shows the bots', () => {
    expect(wrapper.getByText('Bots:')).toBeInTheDocument()
    Game.botNames.forEach(botName => expect(wrapper.getByText(botName)).toBeInTheDocument())
  })

  it('calls onStart prop on form submission', () => {
    fireEvent.click(wrapper.getByText(/Start/i))

    expect(onStart).toBeCalled()
  })
})
