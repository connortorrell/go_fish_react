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
        {opponents.map(opponent => {
          return (
            <div key={opponent.name()}>
              <input type="radio" id={opponent.name()} name="opponentName" value={opponent.name()} required />
              <label htmlFor={opponent.name()}>{opponent.name()}</label>
            </div>
          )
        })}
      </div>
    )
  }
}

export default OpponentList
