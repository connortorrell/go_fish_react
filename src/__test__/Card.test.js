import Card from "../Card"

describe('Card', () => {
  const rank = 'A'
  const suit = 'S'
  const card = new Card(rank, suit)

  it('creates with rank', () => {
    expect(card.rank()).toEqual(rank)
  })

  it('creates with suit', () => {
    expect(card.suit()).toEqual(suit)
  })

  describe('#value', () => {
    it('returns correct value', () => {
      expect(card.value()).toEqual(12)
    })
  })

  describe('#key', () => {
    it('returns correct key of rank-suit', () => {
      expect(card.key()).toEqual('A-S')
    })
  })
})
