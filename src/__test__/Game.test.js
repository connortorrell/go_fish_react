import Game from '../models/Game'
import Player from '../models/Player'
import Deck from '../models/Deck'
import Card from '../models/Card'

describe('Game', () => {
  let player
  let game

  beforeEach(() => {
    player = new Player('Player1')
    game = new Game(player, 9)
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

    it('creates a turnIndex', () => {
      expect(game.turnIndex()).toEqual(0)
    })

    it('creates a results array', () => {
      expect(game.results()).toEqual([])
    })

    it('deals cards to the players', () => {
      game._players().forEach(player => expect(player.cardsLeft()).toEqual(Game.startingHandCount))
    })
  })

  describe('#deal', () => {
    beforeEach(() => {
      game._deck = new Deck()
      game._deal()
    })

    it('deals cards to the player', () => {
      expect(player.cardsLeft()).toEqual(Game.startingHandCount)
    })

    it('deals cards to the bots', () => {
      game.bots().forEach(bot => expect(bot.cardsLeft()).toEqual(Game.startingHandCount))
    })
  })

  describe('#turnPlayer', () => {
    beforeEach(() => {
      game.start()
    })

    it('returns the player for the first turn player', () => {
      expect(game.turnPlayer()).toEqual(game.player())
    })

    it('returns the bot when it is the bots turn', () => {
      game.bots().forEach((bot, i) => {
        game._turnIndex++
        expect(game.turnPlayer()).toEqual(bot)
      })
    })

    it('returns the player after the bots turns', () => {
      game._turnIndex = 10
      expect(game.turnPlayer()).toEqual(game.player())
    })
  })

  describe('#_players', () => {
    it('returns all the players', () => {
      expect(game._players().includes(game.player())).toEqual(true)
      game.bots().forEach(bot => {
        expect(game._players().includes(bot)).toEqual(true)
      })
    })
  })

  describe('#_opponents', () => {
    beforeEach(() => {
      game.start()
    })

    it('returns all the players except the turnPlayer', () => {
      expect(game._opponents().includes(game.player())).toEqual(false)
      game.bots().forEach(bot => {
        expect(game._opponents().includes(bot)).toEqual(true)
      })
    })
  })

  describe('#playTurn', () => {
    beforeEach(() => {
      game.start()
    })

    it('ends turn if player asks wrong', () => {
      game.playTurn(game.bots()[0].name(), 'Y')
      expect(game.turnIndex()).toBeGreaterThan(0)
      expect(game.results().length).toBeGreaterThan(0)
    })

    it('does not end turn if player asks right', () => {
      const askedRank = game.bots()[0].hand()[0].rank()
      game.playTurn(game.bots()[0].name(), askedRank)
      expect(game.turnIndex()).toEqual(0)
      expect(game.results().length).toEqual(1)
    })
  })

  describe('#_playBotTurn', () => {
    beforeEach(() => {
      game.start()
    })

    it('ends turn if bot asks wrong', () => {
      game._turnIndex++
      const bot = game.bots()[0]
      bot._hand = [new Card('Y', "S")]
      game._playBotTurn()
      expect(bot.cardsLeft()).toBeGreaterThanOrEqual(1)
      expect(game.turnIndex()).toBeGreaterThan(1)
      expect(game.results().length).toBeGreaterThan(0)
    })

    it('gives bot cards when bot asks right', () => {
      game._turnIndex++
      const bot = game.bots()[0]
      bot._hand = [game.player().hand()[0]]
      game._playBotTurn()

      expect(bot.cardsLeft()).toBeGreaterThanOrEqual(1)
    })
  })

  describe('#_endTurn', () => {
    beforeEach(() => {
      game.start()
      game.bots().forEach(bot => bot.take(new Card('Y', 'S')))
    })

    it('gives the turn player a card from the deck', () => {
      const beforeHand = game.player().hand()
      game._endTurn()
      expect(game.player().hand).not.toEqual(beforeHand)
    })

    it('increases the turn index', () => {
      game._endTurn()
      expect(game.turnIndex()).toBeGreaterThan(0)
    })

    it('adds the players result to results', () => {
      game._endTurn()
      expect(game.results().length).toBeGreaterThan(0)
    })
  })

  describe('#roundResults', () => {
    beforeEach(() => {
      game.start()
      game._endTurn() // allow bots to all take turns
    })

    it('returns results from the most recent round', () => {
      game._endTurn()
      expect(game.roundResults().length).toBeGreaterThanOrEqual(game._players().length)
      const filteredRoundResults = game.roundResults().filter(result => game.turnIndex() - result.turnIndex() < game._players().length)
      expect(filteredRoundResults.length).toEqual(game.roundResults().length)
    })
  })

  describe('#_outOfCards', () => {
    beforeEach(() => {
      game.start()
    })

    it('adds a card from the deck if the deck is not empty', () => {
      game._outOfCards()
      expect(game.turnPlayer().cardsLeft()).toEqual(Game.startingHandCount + 1)
    })
  })

  describe('#isOver', () => {
    it('returns false when all the books are not made', () => {
      expect(game.isOver()).toEqual(false)
    })

    it('returns true when all the books are made', () => {
      game.player()._books = 13
      expect(game.isOver()).toEqual(true)
    })
  })

  describe('#standings', () => {
    it('returns players in order of books', () => {
      game.player()._books = 7
      game.bots()[0]._books = 4
      game.bots()[1]._books = 3
      game.bots()[2]._books = 2
      expect(game.standings()[0]).toEqual(game.player())
      expect(game.standings()[1]).toEqual(game.bots()[0])
      expect(game.standings()[2]).toEqual(game.bots()[1])
      expect(game.standings()[3]).toEqual(game.bots()[2])
    })
  })
})
