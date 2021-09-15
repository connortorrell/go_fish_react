import Deck from "./Deck"

class Player {
  constructor(name) {
    this._name = name
    this._hand = []
    this._books = 0
  }

  name() {
    return this._name
  }

  hand() {
    return this._hand
  }

  books() {
    return this._books
  }

  cardsLeft() {
    return this.hand().length
  }

  take(cards) {
    this._hand = this.hand().concat(cards)
    this.updateBooks()
  }

  give(rank) {
    const matchingCards = this.hand().filter(card => card.rank() === rank)
    this._hand = this.hand().filter(card => !matchingCards.includes(card))
    return matchingCards
  }

  ask(opponent, rank) {
    const cardsFished = opponent.give(rank)
    this.take(cardsFished)
    return cardsFished
  }

  updateBooks() {
    Deck.ranks.forEach(rank => {
      const matches = this.hand().filter(card => card.rank() === rank)
      if(matches.length === Deck.bookLength) {
        this._hand = this.hand().filter(card => card.rank() !== rank)
        this._books++
      }
    })
  }
}

export default Player
