import React from 'react'
import PropTypes from 'prop-types'

class GameView extends React.Component {
  static propTypes = {
    game: PropTypes.object.isRequired
  }

  onClick(event) {
    event.preventDefault()
    // this.props.onStart()
  }

  render() {
    const { game } = this.props
    return (
      <div>
        <h1>Welcome to Go Fish!</h1>
        <button id="ask" onClick={this.onClick.bind(this)}>Ask</button>
      </div>
    )
  }
}

export default GameView
