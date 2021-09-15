import React from 'react'
import PropTypes from 'prop-types'
import CardList from './CardList'
import OpponentList from './OpponentList'

class TurnForm extends React.Component {
  static propTypes = {
    cards: PropTypes.array.isRequired,
    opponents: PropTypes.array.isRequired,
    onAsk: PropTypes.func.isRequired
  }

  onSubmit(event) {
    event.preventDefault()
    this.props.onAsk(event.target.opponentName.value, event.target.rank.value)
  }

  render() {
    const { cards, opponents } = this.props
    return (
      <form className="turn-from" onSubmit={this.onSubmit.bind(this)}>
        <CardList cards={cards} />
        <OpponentList opponents={opponents} />
        <input type="submit" id="ask" value="Ask" />
      </form>
    )
  }
}

export default TurnForm
