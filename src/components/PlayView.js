import React from 'react'
import PropTypes from 'prop-types'

class PlayView extends React.Component {
  static propTypes = {
    onPlay: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props)

    this.state = {
      name: ''
    }
  }

  onSubmit(event) {
    event.preventDefault()
    this.props.onPlay(this.state.name, parseInt(event.target.numberOfBots.value))
  }

  onTyping(text) {
    this.setState(() => {
      return { name: text }
    })
  }

  render() {
    return (
      <div>
        <h1>Go Fish</h1>
        <form className="user-form" onSubmit={this.onSubmit.bind(this)}>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" onChange={(event) => this.onTyping(event.target.value)} value={this.state.name} required/>
          <br></br>
          <label htmlFor="numberOfBots">Number of bots</label>
          <select name="numberOfBots" id="numberOfBots">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
          </select>
          <br></br>
          <input id="play" type="submit" value="Play"/>
        </form>
      </div>
    )
  }
}

export default PlayView
