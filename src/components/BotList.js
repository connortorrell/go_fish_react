import React from 'react'
import PropTypes from 'prop-types'

class BotList extends React.Component {
  static propTypes = {
    bots: PropTypes.array.isRequired
  }

  render() {
    const { bots } = this.props
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

export default BotList
