import React from 'react'
import PropTypes from 'prop-types'

class BookCount extends React.Component {
  static propTypes = {
    bookCount: PropTypes.number.isRequired
  }

  render() {
    const { bookCount } = this.props
    return <h2>Your books: {bookCount}</h2>
  }
}

export default BookCount
