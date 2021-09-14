import Bot from './Bot.js'

class Game {
  static botNames = ['BeepBot', 'ToyBot', 'IBot']

  constructor(player, numberOfBots = 3) {
    this._player = player
    this._bots = this.createBots(numberOfBots)
  }

  player() {
    return this._player
  }

  bots() {
    return this._bots
  }

  createBots(numberOfBots) {
    return [...Array(numberOfBots)].map((_, i) => new Bot(Game.botNames[i]))
  }
}

export default Game