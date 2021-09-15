import React from 'react'
import PropTypes from 'prop-types'

class Player extends React.Component {
  static propTypes = {
    player: PropTypes.object.isRequired
  }

  render() {
    const { player } = this.props
    return <h2>You: {player.name()}</h2>
  }
}

export default Player
