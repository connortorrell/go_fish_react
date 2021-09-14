import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import LobbyView from '../LobbyView'
import Player from '../Player'
import Game from '../Game'

describe('LobbyView', () => {
  it('shows the player', () => {
    const name = 'Player1'
    const player = new Player(name)
    const game = new Game(player)
    const onStart = jest.fn()
    const wrapper = render(<LobbyView game={game} onStart={onStart} />)

    expect(wrapper.getByText(`You: ${name}`))
  })

  it('shows the bots', () => {
    const player = new Player('Player1')
    const game = new Game(player)
    const onStart = jest.fn()
    const wrapper = render(<LobbyView game={game} onStart={onStart} />)

    expect(wrapper.getByText('Bots:'))
    Game.botNames.forEach(botName => expect(wrapper.getByText(botName)))
  })

  it('calls onStart prop on form submission', () => {
    const player = new Player('Player1')
    const game = new Game(player)
    const onStart = jest.fn()
    const wrapper = render(<LobbyView game={game} onStart={onStart} />)

    fireEvent.click(wrapper.getByText(/Start/i))

    expect(onStart).toBeCalled()
  })
})
