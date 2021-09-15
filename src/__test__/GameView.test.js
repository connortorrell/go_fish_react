import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import GameView from '../components/GameView'
import Player from '../models/Player'
import Game from '../models/Game'

describe('GameView', () => {
  const name = 'Player1'
  const player = new Player(name)
  const game = new Game(player)
  const turnForm = require('../components/TurnForm')
  const onAsk = jest.fn()
  let wrapper

  beforeAll(() => {
    game.start()
  })

  beforeEach(() => {
    wrapper = render(<GameView game={game} onAsk={onAsk} />)
  })

  it('shows the number of cards in the deck', () => {
    expect(wrapper.getByText(`Cards left in deck: ${game.deck().cardsLeft()}`)).toBeInTheDocument()
  })

  it('shows the player hand', () => {
    expect(wrapper.getByText('Your cards:')).toBeInTheDocument()
    player.hand().forEach(card => expect(wrapper.getAllByText(card.rank())).toBeTruthy())
  })

  it('shows the opponents', () => {
    expect(wrapper.getByText('Opponents:')).toBeInTheDocument()
    game.bots().forEach(bot => expect(wrapper.getByText(`${bot.name()} (Cards left: ${bot.cardsLeft()}) (Books: ${bot.books()})`)).toBeInTheDocument())
  })

  it('calls onAsk prop on form submission', () => {
    const rank = game.player().hand()[0].rank()
    const opponent = game.bots()[0]

    fireEvent.click(wrapper.getAllByLabelText(rank)[0])
    fireEvent.click(wrapper.getByLabelText(`${opponent.name()} (Cards left: ${opponent.cardsLeft()}) (Books: ${opponent.books()})`))
    fireEvent.click(wrapper.getByText(/Ask/i))

    expect(onAsk).toBeCalled()
  })

  it('does not call onAsk prop on form submission if rank is not selected', () => {
    const opponent = game.bots()[0]

    fireEvent.click(wrapper.getByLabelText(`${opponent.name()} (Cards left: ${opponent.cardsLeft()}) (Books: ${opponent.books()})`))
    fireEvent.click(wrapper.getByText(/Ask/i))

    expect(onAsk).not.toBeCalled()
  })

  it('does not call onAsk prop on form submission if opponent is not selected', () => {
    const rank = game.player().hand()[0].rank()

    fireEvent.click(wrapper.getAllByLabelText(rank)[0])
    fireEvent.click(wrapper.getByText(/Ask/i))

    expect(onAsk).not.toBeCalled()
  })
})
