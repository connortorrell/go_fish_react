import React from 'react'
import PropTypes from 'prop-types'

class GameView extends React.Component {
  static propTypes = {
    game: PropTypes.object.isRequired
  }

  render() {
    const { game } = this.props
    return <h1>{game.player().name()}</h1>
  }
}

export default GameView
