import React from 'react'
import PropTypes from 'prop-types'

class OpponentList extends React.Component {
  static propTypes = {
    opponents: PropTypes.array.isRequired
  }

  render() {
    const { opponents } = this.props
    return (
      <div>
        <h2>Opponents:</h2>
        <ul>
          {opponents.map(opponent => <li key={opponent.name()}>{opponent.name()}</li>)}
        </ul>
      </div>
    )
  }
}

export default OpponentList
