import Game from '../Game'
import Player from '../Player'
import Deck from '../Deck'

describe('Game', () => {
  let player
  let game

  beforeEach(() => {
    player = new Player('Player1')
    game = new Game(player)
  })

  it('creates with a player', () => {
    expect(game.player()).toEqual(player)
  })

  it('creates bots', () => {
    game.bots().forEach((bot, i) => expect(bot.name()).toEqual(Game.botNames[i]))
  })

  describe('#start', () => {
    beforeEach(() => {
      game.start()
    })

    it('creates a deck', () => {
      expect(game.deck().empty()).toEqual(false)
    })

    it('deals cards to the player', () => {
      expect(player.cardsLeft()).toEqual(Game.startingHandCount)
    })

    it('deals cards to the bots', () => {
      game.bots().forEach(bot => expect(bot.cardsLeft()).toEqual(Game.startingHandCount))
    })

    it('sets isStarted to true', () => {
      expect(game.isStarted()).toEqual(true)
    })
  })

  describe('#deal', () => {
    beforeEach(() => {
      game._deck = new Deck
      game._deal()
    })

    it('deals cards to the player', () => {
      expect(player.cardsLeft()).toEqual(Game.startingHandCount)
    })

    it('deals cards to the bots', () => {
      game.bots().forEach(bot => expect(bot.cardsLeft()).toEqual(Game.startingHandCount))
    })
  })
})
