import Deck from '../Deck'
import Card from '../Card'

describe('Deck', () => {
  const totalNumberOfCards = 52
  let deck

  beforeEach(() => {
    deck = new Deck
  })

  it('build the deck when created', () => {
    expect(deck.cards().length).toEqual(totalNumberOfCards)
  })

  describe('#shuffle', () => {
    it('mixes up the cards in the deck', () => {
      const deck2 = new Deck
      deck.shuffle()
      deck2.shuffle()
      expect(deck).not.toEqual(deck2)
    })
  })

  describe('#deal', () => {
    it('returns the last card from the deck', () => {
      const card = new Card('A', 'S')
      deck.cards().push(card)

      expect(deck.deal()).toEqual(card)
    })

    it('removes the last card from the deck', () => {
      deck.deal()

      expect(deck.cardsLeft()).toEqual(totalNumberOfCards - 1)
    })
  })

  describe('#cardsLeft', () => {
    it('returns the correct number of cards left', () => {
      expect(deck.cardsLeft()).toEqual(totalNumberOfCards)
    })
  })

  describe('#empty', () => {
    it('returns false when the deck is not empty', () => {
      expect(deck.empty()).toEqual(false)
    })

    it('returns true when the deck is empty', () => {
      deck._cards = []
      expect(deck.empty()).toEqual(true)
    })
  })
})
