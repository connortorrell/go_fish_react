import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import GameView from '../GameView'
import Player from '../Player'
import Game from '../Game'

describe('GameView', () => {
  const name = 'Player1'
  const player = new Player(name)
  const game = new Game(player)
  const onAsk = jest.fn()

  beforeAll(() => {
    game.start()
  })

  it('shows the number of cards in the deck', () => {
    const wrapper = render(<GameView game={game} onAsk={onAsk} />)

    expect(wrapper.getByText(`Cards left in deck: ${game.deck().cardsLeft()}`)).toBeInTheDocument()
  })

  it('shows the player hand', () => {
    const wrapper = render(<GameView game={game} onAsk={onAsk} />)

    expect(wrapper.getByText('Your hand:')).toBeInTheDocument()
    player.hand().forEach(card => expect(wrapper.getByText(card.rank())).toBeInTheDocument()) //fails when duplicate cards are in the hand
  })
})
