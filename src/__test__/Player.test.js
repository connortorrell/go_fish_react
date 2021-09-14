import Card from '../Card'
import Player from '../Player'

describe('Player', () => {
  const name = 'Player1'
  let player

  beforeEach(() => {
    player = new Player(name)
  })

  it('creates with name', () => {
    expect(player.name()).toEqual(name)
  })

  it('creates with empty hand', () => {
    expect(player.hand()).toEqual([])
  })

  it('creates with 0 books', () => {
    expect(player.books()).toEqual(0)
  })

  describe('#cardsLeft', () => {
    it('returns correct number of cards left in the players hand', () => {
      const card = new Card('A', 'S')
      player.take(card)

      expect(player.cardsLeft()).toEqual(1)
    })
  })

  describe('#take', () => {
    it('adds one card to hand', () => {
      const card = new Card('A', 'S')
      player.take(card)

      expect(player.hand()).toEqual([card])
    })

    it('adds several cards to hand', () => {
      const cards = [new Card('A', 'S'), new Card('K', 'C')]
      player.take(cards)

      expect(player.hand()).toEqual(cards)
    })
  })

  describe('#give', () => {
    it('removes one card from hand', () => {
      const card = new Card('A', 'S')
      player.take(card)

      expect(player.give('A')).toEqual([card])
      expect(player.cardsLeft()).toEqual(0)
    })

    it('removes several cards from hand', () => {
      const cards = [new Card('A', 'S'), new Card('A', 'C')]
      player.take(cards)

      expect(player.give('A')).toEqual(cards)
      expect(player.cardsLeft()).toEqual(0)
    })
  })

  describe('#ask', () => {
    it('takes one card from another player', () => {
      const card = new Card('A', 'S')
      const player2 = new Player('Player2')
      player2.take(card)
      player.ask(player2, card.rank())

      expect(player.hand()).toEqual([card])
      expect(player2.cardsLeft()).toEqual(0)
    })

    it('takes several cards from another player', () => {
      const cards = [new Card('A', 'S'), new Card('A', 'C')]
      const player2 = new Player('Player2')
      player2.take(cards)
      player.ask(player2, cards[0].rank())

      expect(player.hand()).toEqual(cards)
      expect(player2.cardsLeft()).toEqual(0)
    })
  })

  describe('#updateBooks', () => {
    it('adds a book and removes cards if player has all 4 suits of one rank', () => {
      const cards = [new Card('A', 'S'), new Card('A', 'C'), new Card('A', 'H'), new Card('A', 'D')]
      player.take(cards)
      player.updateBooks()

      expect(player.cardsLeft()).toEqual(0)
      expect(player.books()).toEqual(1)
    })
  })
})
