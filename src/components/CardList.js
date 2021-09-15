import React from 'react'
import PropTypes from 'prop-types'

class CardList extends React.Component {
  static propTypes = {
    cards: PropTypes.array.isRequired
  }

  render() {
    const { cards } = this.props
    return (
      <div>
        <h2>Your cards:</h2>
        <ul>
          {cards.map(card => <li key={card.key()}>{card.rank()}</li>)}
        </ul>
      </div>
    )
  }
}

export default CardList
