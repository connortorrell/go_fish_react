import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import GameOverView from '../components/GameOverView'
import Player from '../models/Player'
import Game from '../models/Game'

describe('GameOverView', () => {
  const name = 'Player1'
  const player = new Player(name)
  const game = new Game(player)
  const onPlayAgain = jest.fn()
  let wrapper

  beforeEach(() => {
    game.start()
    wrapper = render(<GameOverView game={game} onPlayAgain={onPlayAgain} />)
  })

  it('shows the player and his books', () => {
    expect(wrapper.getByText(`${game.player().name()} (Books: ${game.player().books()})`)).toBeInTheDocument()
  })

  it('calls the passed in function', () => {
    fireEvent.click(wrapper.getByText(/Play again/i))

    expect(onPlayAgain).toBeCalled()
  })
})
