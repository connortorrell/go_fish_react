import Player from './Player'

class Bot extends Player {
  chooseRank() {
    return this.hand()[Math.floor(Math.random() * this.cardsLeft())].rank()
  }

  chooseOpponent(opponents) {
    return opponents[Math.floor(Math.random() * opponents.length)]
  }
}

export default Bot
