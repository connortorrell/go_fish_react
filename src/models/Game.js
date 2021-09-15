import Bot from './Bot.js'
import Deck from './Deck.js'
import Result from './Result.js'

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

  turnIndex() {
    return this._turnIndex
  }

  results() {
    return this._results
  }

  roundResults() {
    const lastResult = this.results()[this.results().length - 1]
    return this.results().filter(result => lastResult.endOfTurn() ? this.turnIndex() - result.turnIndex() < this._players().length : (this.turnIndex() + 1) - result.turnIndex() < this._players().length)
  }

  start() {
    this._deck = new Deck()
    this._turnIndex = 0
    this._results = []
    this._deal()
  }

  playTurn(askedOpponentName, askedRank) {
    const askedOpponent = this.bots().find(bot => bot.name() === askedOpponentName)
    const cardsFished = this.player().ask(askedOpponent, askedRank)
    if(cardsFished.length === 0) {
      this._endTurn(askedOpponentName, askedRank)
    } else {
      this._results.push(new Result(this.turnIndex() + 1, this.turnPlayer(), askedOpponentName, askedRank, cardsFished, this.isOver()))
      this._startTurn()
    }
  }

  isOver() {
    let totalBooks = 0
    this._players().forEach(player => totalBooks += player.books())
    return totalBooks === Deck.totalBooks
  }

  standings() {
    return this._players().sort((a, b) => b.books() - a.books())
  }

  _deal() {
    [...Array(Game.startingHandCount)].forEach(() => this._players().forEach(player => player.take(this.deck().deal())))
  }

  _createBots(numberOfBots) {
    return [...Array(numberOfBots)].map((_, i) => new Bot(Game.botNames[i]))
  }

  _players() {
    return [this.player(), ...this.bots()]
  }

  _opponents() {
    return this._players().filter(player => player !== this.turnPlayer())
  }

  turnPlayer() {
    return this._players()[this.turnIndex() % this._players().length]
  }

  _playBotTurn() {
    const askedOpponent = this.turnPlayer().chooseOpponent(this._opponents())
    const askedRank = this.turnPlayer().chooseRank()
    const cardsFished = this.turnPlayer().ask(askedOpponent, askedRank)
    if(cardsFished.length === 0) {
      this._endTurn(askedOpponent.name(), askedRank)
    } else {
      this._results.push(new Result(this.turnIndex() + 1, this.turnPlayer(), askedOpponent.name(), askedRank, cardsFished, this.isOver()))
      this._startTurn()
    }
  }

  _endTurn(askedOpponentName, askedRank) {
    const cardDrawn = this.deck().deal()
    this.turnPlayer().take(cardDrawn)
    this._results.push(new Result(this.turnIndex() + 1, this.turnPlayer(), askedOpponentName, askedRank, cardDrawn, this.isOver()))
    this._nextTurn()
  }

  _nextTurn() {
    this._turnIndex++
    this._startTurn()
  }

  _startTurn() {
    if(this.turnPlayer().cardsLeft() === 0){
      this._outOfCards()
    } else if(this.turnPlayer().constructor.name === 'Bot') {
      this._playBotTurn()
    }
  }

  _outOfCards() {
    if(!this.isOver()) {
      if(this.deck().empty()) {
        this._nextTurn()
      } else{
        this.turnPlayer().take(this.deck().deal())
        if(this.turnPlayer().constructor.name === 'Bot') {
          this._playBotTurn()
        }
      }
    } else {
      this._turnIndex++
    }
  }
}

export default Game