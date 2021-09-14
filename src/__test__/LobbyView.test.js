import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import LobbyView from '../LobbyView'
import Player from '../Player'
import Game from '../Game'

describe('LobbyView', () => {
  const name = 'Player1'
  const player = new Player(name)
  const game = new Game(player)
  const onStart = jest.fn()

  it('shows the player', () => {
    const wrapper = render(<LobbyView game={game} onStart={onStart} />)
    expect(wrapper.getByText(`You: ${name}`)).toBeInTheDocument
  })

  it('shows the bots', () => {
    const wrapper = render(<LobbyView game={game} onStart={onStart} />)
    expect(wrapper.getByText('Bots:')).toBeInTheDocument
    Game.botNames.forEach(botName => expect(wrapper.getByText(botName)).toBeInTheDocument)
  })

  it('calls onStart prop on form submission', () => {
    const wrapper = render(<LobbyView game={game} onStart={onStart} />)
    fireEvent.click(wrapper.getByText(/Start/i))

    expect(onStart).toBeCalled()
  })
})
