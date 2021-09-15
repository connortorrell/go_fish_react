import React from 'react'
import PlayView from './components/PlayView'
import LobbyView from './components/LobbyView'
import GameView from './components/GameView'
import Player from './models/Player'
import Game from './models/Game'

class App extends React.Component {
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
      return { gameStarted: true }
    })
  }

  _ask() {
    debugger
  }

  render() {
    if(this.state.game) {
      if(this.state.gameStarted) {
        return <GameView game={this.state.game} onAsk={this._ask.bind(this)} />
      } else {
        return <LobbyView game={this.state.game} onStart={this._startGame.bind(this)}/>
      }
    } else{
      return <PlayView onPlay={this._createGame.bind(this)}/>
    }
  }
}

export default App;
