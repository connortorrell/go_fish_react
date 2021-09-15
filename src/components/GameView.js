import React from 'react'
import PropTypes from 'prop-types'
import Hand from './Hand'
import Deck from './Deck'
import OpponentList from './OpponentList'

class GameView extends React.Component {
  static propTypes = {
    game: PropTypes.object.isRequired
  }

  render() {
    const { game } = this.props
    return (
      <div>
        <h1>Your turn!</h1>
        <Deck deck={game.deck()} />
        <Hand hand={game.player().hand()} />
        <OpponentList opponents={game.bots()} />
      </div>
    )
  }
}

export default GameView
