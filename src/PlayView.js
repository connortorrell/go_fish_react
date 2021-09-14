import React from 'react'
import PropTypes from 'prop-types'

class PlayView extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: ''
    }
  }

  static propTypes = {
    onPlay: PropTypes.func.isRequired
  }

  onSubmit(event) {
    event.preventDefault()
    this.props.onPlay(this.state.name)
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
          <input type="text" id="name" onChange={(event) => this.onTyping(event.target.value)} value={this.state.name}/>

          <input id="play" type="submit" value="Play"/>
        </form>
      </div>
    )
  }
}

export default PlayView
