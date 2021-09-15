import Card from "./Card"

class Deck {
  static ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
  static suits = ['H', 'D', 'C', 'S']
  static bookLength = 4
  static totalBooks = 13

  constructor() {
    this._cards = this.build()
    this.shuffle()
  }

  cards() {
    return this._cards
  }

  build() {
    let cards = []
    Deck.ranks.forEach(rank => Deck.suits.forEach(suit => cards.push(new Card(rank, suit))))
    return cards
  }

  shuffle() {
    this.cards().sort(() => Math.random() - 0.5);
  }

  deal() {
    if(!this.empty()){
      return this.cards().pop()
    } else {
      return []
    }
  }

  cardsLeft() {
    return this.cards().length
  }

  empty() {
    return this.cardsLeft() === 0
  }
}

export default Deck
