import Bot from './Bot.js'
import Deck from './Deck.js'

class Game {
  static botNames = ['BeepBot', 'ToyBot', 'IBot']
  static startingHandCount = 5

  constructor(player, numberOfBots = 3) {
    this._player = player
    this._bots = this._createBots(numberOfBots)
  }

  player() {
    return this._player
  }

  bots() {
    return this._bots
  }

  deck() {
    return this._deck
  }

  start() {
    this._deck = new Deck
    this._deal()
  }

  _deal() {
    [...Array(Game.startingHandCount)].forEach(_ => this._players().forEach(player => player.take(this.deck().deal())))
  }

  _createBots(numberOfBots) {
    return [...Array(numberOfBots)].map((_, i) => new Bot(Game.botNames[i]))
  }

  _players() {
    return [this.player(), ...this.bots()]
  }
}

export default Game
