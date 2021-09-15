import React from 'react'
import { render } from '@testing-library/react'
import RoundResultList from '../components/RoundResultList'
import Player from '../models/Player'
import Game from '../models/Game'
import Result from '../models/Result'
import Card from '../models/Card'

describe('RoundResultList', () => {
  const name = 'Player1'
  const player = new Player(name)
  const game = new Game(player)
  const askedOpponentName = 'BeepBot'
  const askedRank = 'K'
  const cardDrawn = new Card('A', 'S')
  let result
  let wrapper

  beforeEach(() => {
    game.start()
    result = new Result(game.turnIndex() + 1, player, askedOpponentName, askedRank, cardDrawn)
    wrapper = render(<RoundResultList roundResults={[result]} player={player} />)
  })

  it('shows the result', () => {
    expect(wrapper.getByText(result.message())).toBeInTheDocument()
  })
})
