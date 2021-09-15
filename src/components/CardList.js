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
        {cards.map(card => {
          return (
            <div key={card.key()}>
              <input type="radio" id={card.key()} name="rank" value={card.rank()} required />
              <label htmlFor={card.key()}>{card.rank()}</label>
            </div>
          )
        })}
      </div>
    )
  }
}

export default CardList
