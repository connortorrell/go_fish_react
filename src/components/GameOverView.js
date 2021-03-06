import React from 'react'
import PropTypes from 'prop-types'
import GameResultList from './GameResultList'
import Standings from './Standings'

class GameOverView extends React.Component {
  static propTypes = {
    game: PropTypes.object.isRequired,
    onPlayAgain: PropTypes.func.isRequired
  }

  onClick(event) {
    event.preventDefault()
    this.props.onPlayAgain()
  }

  render() {
    const { game } = this.props
    return (
      <div>
        <h1>Game over!</h1>
        <Standings standings={game.standings()} player={game.player()} />
        <GameResultList gameResults={game.results()} player={game.player()} />
        <button id="playAgain" onClick={this.onClick.bind(this)}>Play again</button>
      </div>
    )
  }
}

export default GameOverView
