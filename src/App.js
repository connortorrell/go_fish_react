import React from 'react'
import PlayView from './PlayView'
import LobbyView from './LobbyView'
import Player from './Player'
import Game from './Game'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  _joinGame(name) {
    this.setState(() => {
      const player = new Player(name)
      const game = new Game(player)
      return { game }
    })
  }

  render() {
    if(this.state.game) {
      return <LobbyView game={this.state.game}/>
    } else{
      return <PlayView onPlay={this._joinGame.bind(this)}/>
    }
  }
}

export default App;
