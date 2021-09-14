import React from 'react'
import PropTypes from 'prop-types'

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
        {this._renderPlayer(game.player().name())}
        {this._renderBots(game.bots())}
        <button id="start" onClick={this.onClick.bind(this)}>Start</button>
      </div>
    )
  }

  _renderPlayer(name) {
    return <h2>You: {name}</h2>
  }

  _renderBots(bots) {
    return (
      <div>
        <h2>Bots:</h2>
        <ul>
          {bots.map(bot => <li key={bot.name()}>{bot.name()}</li>)}
        </ul>
      </div>
    )
  }
}

export default LobbyView
