import React from 'react'
import PropTypes from 'prop-types'

class Standings extends React.Component {
  static propTypes = {
    standings: PropTypes.array.isRequired,
    player: PropTypes.object.isRequired
  }

  render() {
    const { standings, player } = this.props
    return (
      <div>
        <h2>Standings:</h2>
        <ul>
          {standings.map(standingsPlayer => standingsPlayer === player ? <li key={standingsPlayer.name()}><strong>{standingsPlayer.name()} (Books: {standingsPlayer.books()})</strong></li> : <li key={standingsPlayer.name()}>{standingsPlayer.name()} (Books: {standingsPlayer.books()})</li>)}
        </ul>
      </div>
    )
  }
}

export default Standings
