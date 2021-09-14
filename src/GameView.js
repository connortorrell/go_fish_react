import React from 'react'
import PropTypes from 'prop-types'
import HandView from './HandView'

class GameView extends React.Component {
  static propTypes = {
    game: PropTypes.object.isRequired
  }

  render() {
    const { game } = this.props
    return (
      <div>
        <h1>Your turn!</h1>
        <h2>Cards left in deck: {game.deck().cardsLeft()}</h2>
        <HandView hand={game.player().hand()}/>
      </div>
    )
  }

}

export default GameView
