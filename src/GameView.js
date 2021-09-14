import React from 'react'
import PropTypes from 'prop-types'

class GameView extends React.Component {
  static propTypes = {
    game: PropTypes.object.isRequired
  }

  onClick(event) {
    event.preventDefault()
    // this.props.onAsk()
  }

  render() {
    const { game } = this.props
    return (
      <div>
        <h1>Your turn!</h1>
        {this._renderDeck(game.deck().cardsLeft())}
      </div>
    )
  }

  _renderDeck(cardsLeft) {
    return <h2>Cards left in deck: {cardsLeft}</h2>
  }
}

export default GameView
