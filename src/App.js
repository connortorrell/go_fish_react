import React from 'react'
import PlayView from './components/PlayView'
import LobbyView from './components/LobbyView'
import GameView from './components/GameView'
import Player from './models/Player'
import Game from './models/Game'

class App extends React.Component {
  static gameStatusStarted = 'started'
  static gameStatusOver = 'over'

  constructor(props) {
    super(props)

    this.state = {}
  }

  _createGame(name) {
    this.setState(() => {
      const player = new Player(name)
      const game = new Game(player)
      return { game }
    })
  }

  _startGame() {
    this.state.game.start()
    this.setState(() => {
      return { gameStatus: App.gameStatusStarted }
    })
  }

  _ask(askedOpponentName, askedRank) {
    this.state.game.playTurn(askedOpponentName, askedRank)
    if(this.state.game.isOver()) {
      this.setState(() => {
        return { gameStatus: App.gameStatusOver }
      })
    } else {
      this.setState((state) => {
        return { turnIndex: state.game.turnIndex() }
      })
    }
  }

  render() {
    if(this.state.game) {
      if(this.state.gameStatus === App.gameStatusStarted) {
        return <GameView game={this.state.game} onAsk={this._ask.bind(this)} />
      } else if(this.state.gameStatus === App.gameStatusOver) {
        // return <GameOverView game={this.state.game} onPlayAgain={this._playAgain.bind(this)} />
      } else {
        return <LobbyView game={this.state.game} onStart={this._startGame.bind(this)}/>
      }
    } else{
      return <PlayView onPlay={this._createGame.bind(this)}/>
    }
  }
}

export default App;
