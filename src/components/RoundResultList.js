import React from 'react'
import PropTypes from 'prop-types'

class RoundResultList extends React.Component {
  static propTypes = {
    roundResults: PropTypes.array.isRequired,
    player: PropTypes.object.isRequired
  }

  render() {
    const { roundResults, player } = this.props
    return (
      <div>
        <h2>Round results:</h2>
        <ul>
          {this._renderRoundResults(roundResults, player)}
        </ul>
      </div>
    )
  }

  _renderRoundResults(roundResults, player) {
    if(roundResults.length === 0){
      return <li>There are no results yet</li>
    } else {
      return roundResults.map(result => result.turnPlayer() === player ? <li key={result.message()}><strong>{result.message()}</strong></li> : <li key={result.message()}>{result.message()}</li>).reverse()
    }
  }
}

export default RoundResultList
