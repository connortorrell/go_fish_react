import React from 'react'
import PropTypes from 'prop-types'
import BotList from './BotList'
import Player from './Player'

class LobbyView extends React.Component {
  static propTypes = {
    game: PropTypes.object.isRequired,
    onStart: PropTypes.func.isRequired
  }

  onClick(event) {
    event.preventDefault()
    this.props.onStart()
  }

  render() {
    const { game } = this.props
    return (
      <div>
        <h1>Welcome to Go Fish!</h1>
        <Player player={game.player()} />
        <BotList bots={game.bots()} />
        <button id="start" onClick={this.onClick.bind(this)}>Start</button>
      </div>
    )
  }
}

export default LobbyView
