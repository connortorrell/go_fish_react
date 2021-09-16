class Result {
  constructor(turnIndex, turnPlayer, askedOpponentName, askedRank, cardsFished) {
    this._turnIndex = turnIndex
    this._turnPlayer = turnPlayer
    this._askedOpponentName = askedOpponentName
    this._askedRank = askedRank
    this._cardsFished = cardsFished
  }

  turnIndex() {
    return this._turnIndex
  }

  turnPlayer() {
    return this._turnPlayer
  }

  askedOpponentName() {
    return this._askedOpponentName
  }

  askedRank() {
    return this._askedRank
  }

  cardsFished() {
    return this._cardsFished
  }

  drewCard() {
    return !Array.isArray(this.cardsFished()) || this.cardsFished().length === 0
  }

  message() {
    if(this.drewCard()) {
      return `Turn ${this.turnIndex()}: ${this.turnPlayer().name()} asked ${this.askedOpponentName()} for a ${this.askedRank()}. Go fish ${this.turnPlayer().name()}!`
    } else {
      return `Turn ${this.turnIndex()}: ${this.turnPlayer().name()} asked ${this.askedOpponentName()} for a ${this.askedRank()} and received ${this.cardsFished().length}`
    }
  }
}

export default Result
