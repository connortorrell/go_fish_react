import React from 'react'
import PropTypes from 'prop-types'

class Deck extends React.Component {
  static propTypes = {
    deck: PropTypes.object.isRequired
  }

  render() {
    const { deck } = this.props
    return <h2>Cards left in deck: {deck.cardsLeft()}</h2>
  }
}

export default Deck
