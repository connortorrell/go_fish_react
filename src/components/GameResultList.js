import React from 'react'
import PropTypes from 'prop-types'

class GameResultList extends React.Component {
  static propTypes = {
    gameResults: PropTypes.array.isRequired,
    player: PropTypes.object.isRequired
  }

  render() {
    const { gameResults, player } = this.props
    return (
      <div>
        <h2>Game results:</h2>
        <ul>
          {gameResults.map(result => result.turnPlayer() === player ? <li key={result.message()}><strong>{result.message()}</strong></li> : <li key={result.message()}>{result.message()}</li>).reverse()}
        </ul>
      </div>
    )
  }
}

export default GameResultList
