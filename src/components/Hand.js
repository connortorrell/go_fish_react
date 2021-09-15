import React from 'react'
import PropTypes from 'prop-types'

class Hand extends React.Component {
  static propTypes = {
    hand: PropTypes.array.isRequired
  }

  render() {
    const { hand } = this.props
    return (
      <div>
        <h2>Your hand:</h2>
        <ul>
          {hand.map(card => <li key={card.key()}>{card.rank()}</li>)}
        </ul>
      </div>
    )
  }
}

export default Hand
