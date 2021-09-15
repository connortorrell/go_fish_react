import Deck from "./Deck"

class Card {
  constructor(rank, suit) {
    this._rank = rank
    this._suit = suit
  }

  rank() {
    return this._rank
  }

  suit() {
    return this._suit
  }

  value(){
    return Deck.ranks.indexOf(this.rank())
  }

  key() {
    return `${this.rank()}-${this.suit()}`
  }
}

export default Card
