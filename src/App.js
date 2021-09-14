import React from 'react'
import PlayView from './PlayView'
import LobbyView from './LobbyView'
import GameView from './GameView'
import Player from './Player'
import Game from './Game'

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
    this.forceUpdate()
  }

  render() {
    if(this.state.game) {
      if(this.state.game.isStarted()) {
        return <GameView game={this.state.game} />
      } else {
        return <LobbyView game={this.state.game} onStart={this._startGame.bind(this)}/>
      }
    } else{
      return <PlayView onPlay={this._createGame.bind(this)}/>
    }
  }
}

export default App;
