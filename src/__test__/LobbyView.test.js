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
    const wrapper = render(<LobbyView game={game} />)

    expect(wrapper.getByText(`You: ${name}`))
  })

  it('shows the bots', () => {
    const name = 'Player1'
    const player = new Player(name)
    const game = new Game(player)
    const wrapper = render(<LobbyView game={game} />)

    expect(wrapper.getByText('Bots:'))
    Game.botNames.forEach(botName => expect(wrapper.getByText(botName)))
  })
})
