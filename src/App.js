import React from 'react'
import PlayView from './PlayView'
import GameView from './GameView'
import Player from './Player'
import Game from './Game'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  joinGame(name) {
    this.setState(() => {
      const player = new Player(name)
      const game = new Game(player)
      return { game }
    })
  }

  render() {
    if(this.state.game) {
      return <GameView game={this.state.game}/>
    } else{
      return <PlayView onPlay={this.joinGame.bind(this)}/>
    }
  }
}

export default App;
