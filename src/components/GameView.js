import React from 'react'
import PropTypes from 'prop-types'
import Deck from './Deck'
import TurnForm from './TurnForm'
import RoundResultList from './RoundResultList'
import BookCount from './BookCount'

class GameView extends React.Component {
  static propTypes = {
    game: PropTypes.object.isRequired,
    onAsk: PropTypes.func.isRequired
  }

  render() {
    const { game, onAsk } = this.props
    return (
      <div>
        <h1>Your turn!</h1>
        <Deck deck={game.deck()} />
        <BookCount bookCount={game.player().books()} />
        <TurnForm cards={game.player().hand()} opponents={game.bots()} onAsk={onAsk} />
        <RoundResultList roundResults={game.roundResults()} player={game.player()} />
      </div>
    )
  }
}

export default GameView
