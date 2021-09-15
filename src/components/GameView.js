import React from 'react'
import PropTypes from 'prop-types'
import CardList from './CardList'
import Deck from './Deck'
import OpponentList from './OpponentList'

class GameView extends React.Component {
  static propTypes = {
    game: PropTypes.object.isRequired,
    onAsk: PropTypes.func.isRequired
  }

  onClick(event) {
    event.preventDefault()
    this.props.onAsk()
  }

  render() {
    const { game } = this.props
    return (
      <div>
        <h1>Your turn!</h1>
        <Deck deck={game.deck()} />
        <CardList cards={game.player().hand()} />
        <OpponentList opponents={game.bots()} />
        <button id="ask" onClick={this.onClick.bind(this)}>Ask</button>
      </div>
    )
  }
}

export default GameView
